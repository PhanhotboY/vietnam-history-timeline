require('dotenv').config();
import { PrismaClient } from '../generated/prisma/client';

async function main() {
  const prisma = new PrismaClient();
  await prisma.$connect();

  for (const { name, slug, description } of Object.values(RESOURCES)) {
    await prisma.resource.create({
      data: {
        name,
        slug,
        description,
      },
    });
  }

  console.log('Resources generated successfully!');

  await prisma.$disconnect();
}

const RESOURCES = [
  {
    name: 'Resource Management',
    slug: 'resource',
    description: 'Quản lý tài nguyên',
  },
  {
    name: 'Role Management',
    slug: 'role',
    description: 'Quản lý vai trò',
  },
  {
    name: 'OTP Management',
    slug: 'otp',
    description: 'Quản lý OTP',
  },
  {
    name: 'Key Token Management',
    slug: 'keyToken',
    description: 'Quản lý token',
  },
  {
    name: 'Image Management',
    slug: 'image',
    description: 'Quản lý hình ảnh',
  },
  {
    name: 'API Key Management',
    slug: 'apiKey',
    description: 'Quản lý khóa API',
  },
  {
    name: 'User Management',
    slug: 'user',
    description: 'Quản lý người dùng hệ thống',
  },
];

main();
