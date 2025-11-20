import { PrismaService } from '@auth/database';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { isUUID } from 'class-validator';
import {
  GrantBaseCreateDto,
  RoleBaseCreateDto,
  RoleBaseUpdateDto,
} from '@phanhotboy/nsv-common/dto';

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

  createRole = async (roleData: RoleBaseCreateDto) => {
    try {
      const { grants, ...role } = roleData;
      const foundRole = await this.prisma.role.findFirst({
        where: { OR: [{ name: role.name }, { slug: role.slug }] },
      });
      if (foundRole) {
        throw new BadRequestException('Role already exists');
      }

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

  updateRole = async (roleId: string, roleData: RoleBaseUpdateDto) => {
    const role = await this.getRoleById(roleId);
    if (!role) throw new NotFoundException('Role not found');
    await this.prisma.role.update({
      where: { id: role.id },
      data: {
        ...roleData,
        grants: undefined,
        status: roleData.status ?? role.status,
      },
    });
  };

  deleteRole = async (roleId: string) => {
    const role = await this.prisma.role.delete({
      where: { id: roleId },
    });
    if (!role) throw new NotFoundException('Role not found');
    return role;
  };

  addRoleGrants = async (roleId: string, newGrants: GrantBaseCreateDto[]) => {
    if (!newGrants || newGrants.length === 0) {
      throw new BadRequestException('No grants provided');
    }
    // Lấy role hiện tại
    const currentRole = await this.getRoleById(roleId);
    if (!currentRole) throw new NotFoundException('Role not found');

    // Tạo map của các grant hiện tại theo resourceId để kiểm tra trùng lặp
    const existingGrants = new Map(
      currentRole.grants!.map(({ attribute, roleId, resourceId, action }) => [
        JSON.stringify({ roleId, resourceId, action }),
        attribute,
      ]),
    );

    // Lọc ra các grant mới (không trùng với grant hiện tại)
    const validNewGrants = newGrants.filter(
      ({ action, resourceId }) =>
        !existingGrants.has(
          JSON.stringify({ roleId: currentRole.id, resourceId, action }),
        ),
    );

    // Chuyển đổi resourceId thành ObjectId
    const grantsToAdd = validNewGrants.map((grant) => {
      this.checkActionFormat(grant.action);

      return {
        resourceId: grant.resourceId,
        action: grant.action,
        attribute: grant.attribute || '*',
      };
    });

    if (grantsToAdd.length === 0) {
      throw new BadRequestException('All provided grants are duplicates');
    }
    // Thêm grants mới vào mảng grants hiện tại
    const updatedRole = await this.prisma.role.update({
      where: { id: currentRole.id },
      data: {
        grants: {
          createMany: { data: grantsToAdd },
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
          action: true,
          attribute: true,
        },
      });

      return permissions.map((perm) => ({
        role: perm.role.slug,
        resource: perm.resource.slug,
        action: perm.action,
        attribute: perm.attribute || '*',
      }));
    } catch (error) {
      throw error;
    }
  };

  checkActionFormat = (action: string) => {
    if (typeof action !== 'string') {
      throw new BadRequestException('Each action must be a string');
    }
    if (!action.match(/^(create|read|update|delete):(any|own)$/i)) {
      throw new BadRequestException('Wrong action format!');
    }
    return true;
  };
}
