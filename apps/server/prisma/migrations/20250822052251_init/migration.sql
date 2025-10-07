-- CreateEnum
CREATE TYPE "public"."UserSex" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."UserStatus" AS ENUM ('ACTIVE', 'PENDING', 'DELETED');

-- CreateEnum
CREATE TYPE "public"."RoleStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "public"."OTPStatus" AS ENUM ('ACTIVE', 'PENDING', 'BLOCKED');

-- CreateEnum
CREATE TYPE "public"."ApiKeyPermission" AS ENUM ('READ', 'WRITE', 'DELETE', 'ALL');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255),
    "slug" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "salt" VARCHAR(255) NOT NULL,
    "avatar" VARCHAR(255),
    "address" VARCHAR(255),
    "birthdate" DATE,
    "msisdn" VARCHAR(255),
    "sex" "public"."UserSex",
    "status" "public"."UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "role" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Resource" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Role" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "status" "public"."RoleStatus" NOT NULL DEFAULT 'ACTIVE',
    "description" TEXT,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Grant" (
    "id" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "action" VARCHAR(20)[],

    CONSTRAINT "Grant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OTP" (
    "id" TEXT NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "status" "public"."OTPStatus" NOT NULL DEFAULT 'ACTIVE',
    "expiresAt" TIMESTAMP(3) NOT NULL DEFAULT NOW() + INTERVAL '60 seconds',

    CONSTRAINT "OTP_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ApiKey" (
    "id" TEXT NOT NULL,
    "key" VARCHAR(255) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "permissions" "public"."ApiKeyPermission"[],

    CONSTRAINT "ApiKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."KeyToken" (
    "id" TEXT NOT NULL,
    "browserId" VARCHAR(255) NOT NULL,
    "publicKey" TEXT NOT NULL,
    "privateKey" TEXT NOT NULL,
    "refreshTokenUsed" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "refreshToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "KeyToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_slug_key" ON "public"."User"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_name_key" ON "public"."Resource"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_slug_key" ON "public"."Resource"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "public"."Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Role_slug_key" ON "public"."Role"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "OTP_token_key" ON "public"."OTP"("token");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_key_key" ON "public"."ApiKey"("key");

-- AddForeignKey
ALTER TABLE "public"."Grant" ADD CONSTRAINT "Grant_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Grant" ADD CONSTRAINT "Grant_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "public"."Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."KeyToken" ADD CONSTRAINT "KeyToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
