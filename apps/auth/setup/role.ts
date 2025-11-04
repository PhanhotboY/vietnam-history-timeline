require('dotenv').config();
import { PrismaClient, RoleStatus } from '../generated/prisma/client';

class UtilService {
  isNullish = (val: any) => (val ?? null) === null;
  isEmptyObj = (obj: Object) => !Object.keys(obj).length;
  getSkipNumber = (limit: number, page: number) => limit * (page - 1);
  isObj = (obj: any) => obj instanceof Object && !Array.isArray(obj);
  capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  removeNullishElements(arr: Array<any>) {
    const final: typeof arr = [];

    arr.forEach((ele) => {
      if (!this.isNullish(ele) && ele !== '') {
        const result = this.removeNestedNullish(ele);
        if (result instanceof Object && this.isEmptyObj(result)) return;

        final[final.length] = result;
      }
    });

    return final.filter((ele) => !this.isNullish(ele) && ele);
  }

  removeNullishAttributes(obj: Record<string, any>) {
    const final: typeof obj = {};

    (Object.keys(obj) as Array<keyof typeof obj>).forEach((key) => {
      if (!this.isNullish(obj[key]) && obj[key] !== '') {
        const result = this.removeNestedNullish(obj[key]);

        if (result instanceof Object && this.isEmptyObj(result)) return;

        final[key] = result;
      }
    });

    return final;
  }

  removeNestedNullish<T>(any: any): T {
    if (any instanceof Array)
      return this.removeNullishElements(any as Array<any>) as T;
    if (any instanceof Object)
      return this.removeNullishAttributes(any as Object) as T;

    return any;
  }
}

async function main() {
  const prisma = new PrismaClient();
  const util = new UtilService();
  await prisma.$connect();

  for (const { name, slug, description, grants, status } of Object.values(
    ROLES,
  )) {
    const formatedGrants = await Promise.all(
      grants.map(async (grant) => {
        const resrc = await prisma.resource.findUnique({
          where: { slug: grant.resourceId.slug },
        });
        if (!resrc) return null;

        return {
          resourceId: resrc.id,
          action: grant.action,
          attribute: grant.attribute,
        };
      }),
    );

    await prisma.role.create({
      data: {
        name,
        slug,
        description,
        status: RoleStatus.ACTIVE,
        grants: { create: util.removeNullishElements(formatedGrants) },
      },
    });
  }

  console.log('Roles generated successfully!');

  await prisma.$disconnect();
}

// Base permissions shared by all employees
const BASE_EMPLOYEE_GRANTS = [
  {
    resourceId: { slug: 'keyToken' },
    actions: ['create:own', 'read:own', 'update:own', 'delete:own'],
  },
  { resourceId: { slug: 'user' }, actions: ['read:own', 'update:own'] },
  {
    resourceId: { slug: 'image' },
    actions: ['create:any', 'read:any', 'update:any', 'delete:any'],
  },
];

const ROLES = [
  {
    name: 'Quản trị hệ thống',
    slug: 'admin',
    status: RoleStatus.ACTIVE,
    description: 'Quản trị hệ thống',
    grants: [
      'resource',
      'template',
      'role',
      'otp',
      'apiKey',
      'keyToken',
      'image',
      'user',
    ]
      .map((resource) => {
        return ['create:any', 'read:any', 'update:any', 'delete:any'].map(
          (action) => ({
            resourceId: { slug: resource },
            action,
            attribute: '*',
          }),
        );
      })
      .flat(),
  },
];

main();
