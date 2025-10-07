import { PrismaService } from '@/database';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateRoleDto, GrantDto } from '@shared/dto/role';
import { isUUID } from 'class-validator';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  getRoles = async (query: any = {}) => {
    try {
      const roles = await this.prisma.role.findMany({
        where: query,
        include: {
          grants: {
            include: {
              resource: {
                select: {
                  name: true,
                  slug: true,
                  description: true,
                },
              },
            },
          },
        },
        // orderBy: {
        //   createdAt: 'desc',
        // },
      });
      return roles;
    } catch (error) {
      throw error;
    }
  };

  createRole = async (roleData: CreateRoleDto) => {
    try {
      const { grants, ...role } = roleData;
      const newRole = await this.prisma.role.create({
        data: role,
      });
      if (grants && grants.length > 0) {
        await this.prisma.grant.createMany({
          data: grants.map((grant) => ({
            ...grant,
            roleId: newRole.id,
            attribute: grant.attribute || '*',
          })),
        });
      }
      return newRole;
    } catch (error) {
      throw error;
    }
  };

  getRoleById = async (roleId: string) => {
    const query = isUUID(roleId) ? { id: roleId } : { slug: roleId };

    const role = await this.prisma.role.findUnique({
      where: query,
      include: {
        grants: {
          include: {
            resource: {
              select: { name: true, slug: true, description: true },
            },
          },
        },
      },
    });
    if (!role) throw new NotFoundException('Role not found');
    return role;
  };

  updateRole = async (roleId: string, roleData: Partial<any>) => {
    const role = await this.prisma.role.findUnique({
      where: { id: roleId },
    });
    if (!role) throw new NotFoundException('Role not found');
    return role;
  };

  deleteRole = async (roleId: string) => {
    const role = await this.prisma.role.delete({
      where: { id: roleId },
    });
    if (!role) throw new NotFoundException('Role not found');
    return role;
  };

  updateRoleGrants = async (roleId: string, grants: GrantDto[]) => {
    // Lấy role hiện tại
    const currentRole = await this.getRoleById(roleId);

    // Cập nhật các grants
    const updatedGrants = currentRole.grants!.map((currentGrant) => {
      this.checkActionsFormat(currentGrant.actions);
      // Tìm grant mới tương ứng trong danh sách cập nhật
      const updateGrant = grants.find(
        (g) => g.resourceId === currentGrant.resourceId,
      );

      if (updateGrant) {
        // Nếu tìm thấy grant cần update, cập nhật actions mới
        return {
          resourceId: currentGrant.resourceId,
          actions: updateGrant.actions,
        };
      }
      // Nếu không tìm thấy, chuyển đổi grant hiện tại thành plain object
      return {
        resourceId: currentGrant.resourceId,
        actions: currentGrant.actions,
      };
    });

    // Cập nhật role với grants đã được xử lý
    const role = await this.prisma.grant.updateMany({
      where: {
        roleId: roleId,
        resourceId: { in: updatedGrants.map((g) => g.resourceId) },
      },
      data: { actions: { set: updatedGrants.flatMap((g) => g.actions) } },
    });

    if (!role) throw new NotFoundException('Role not found');
    return role;
  };

  addRoleGrants = async (roleId: string, newGrants: GrantDto[]) => {
    try {
      // Lấy role hiện tại
      const currentRole = await this.getRoleById(roleId);
      if (!currentRole) throw new NotFoundException('Role not found');

      // Tạo map của các grant hiện tại theo resourceId để kiểm tra trùng lặp
      const existingResourceIds = new Set(
        currentRole.grants!.map((grant) => grant.resourceId),
      );

      // Lọc ra các grant mới (không trùng với grant hiện tại)
      const validNewGrants = newGrants.filter(
        (grant) => !existingResourceIds.has(grant.resourceId),
      );

      // Chuyển đổi resourceId thành ObjectId
      const grantsToAdd = validNewGrants.map((grant) => {
        this.checkActionsFormat(grant.actions);

        return {
          resourceId: grant.resourceId,
          actions: grant.actions,
        };
      });

      // Thêm grants mới vào mảng grants hiện tại
      const updatedRole = await this.prisma.role.update({
        where: { id: roleId },
        data: {
          grants: {
            createMany: {
              data: grantsToAdd,
            },
          },
        },
        include: {
          grants: {
            include: {
              resource: {
                select: {
                  name: true,
                  slug: true,
                  description: true,
                },
              },
            },
          },
        },
      });

      if (!updatedRole)
        throw new NotFoundException('Role not found after update');
      return updatedRole;
    } catch (error) {
      throw error;
    }
  };

  deleteRoleGrant = async (roleId: string, resourceId: string) => {
    try {
      // Kiểm tra role tồn tại
      const currentRole = await this.prisma.role.findUnique({
        where: { id: roleId },
        include: { grants: true },
      });
      if (!currentRole) throw new NotFoundException('Role not found');

      // Kiểm tra grant tồn tại
      const grantExists = currentRole.grants.some(
        (grant) => grant.resourceId.toString() === resourceId,
      );
      if (!grantExists)
        throw new NotFoundException('Grant not found in this role');

      // Xóa grant khỏi role bằng cách pull resource đó ra khỏi mảng grants
      const updatedRole = await this.prisma.grant.deleteMany({
        where: { roleId: roleId, resourceId: resourceId },
      });

      if (!updatedRole)
        throw new NotFoundException('Role not found after update');
      return updatedRole;
    } catch (error) {
      throw error;
    }
  };

  getPermissions = async (roleSlug: string) => {
    try {
      const permissions = await this.prisma.grant.findMany({
        where: {
          role: { slug: roleSlug },
        },
        select: {
          role: { select: { slug: true } },
          resource: { select: { slug: true } },
          actions: true,
        },
      });

      return permissions.map((perm) => ({
        role: perm.role.slug,
        resource: perm.resource.slug,
        actions: perm.actions,
        attributes: '*',
      }));
    } catch (error) {
      throw error;
    }
  };

  checkActionsFormat = (actions: string[]) => {
    if (!Array.isArray(actions)) {
      throw new BadRequestException('Actions must be an array');
    }
    for (const action of actions) {
      if (typeof action !== 'string') {
        throw new BadRequestException('Each action must be a string');
      }
      if (!action.match(/^(create|read|update|delete):(any|own)$/i)) {
        throw new BadRequestException('Wrong action format!');
      }
    }
    return true;
  };
}
