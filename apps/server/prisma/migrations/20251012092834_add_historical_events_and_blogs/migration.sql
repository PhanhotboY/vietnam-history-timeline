/*
  Warnings:

  - The primary key for the `ApiKey` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Grant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `KeyToken` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `OTP` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Resource` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `updatedAt` to the `ApiKey` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `ApiKey` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Grant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `roleId` on the `Grant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `resourceId` on the `Grant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `KeyToken` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `KeyToken` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `KeyToken` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `OTP` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `OTP` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Resource` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Role` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `roleId` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "public"."Grant" DROP CONSTRAINT "Grant_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Grant" DROP CONSTRAINT "Grant_roleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."KeyToken" DROP CONSTRAINT "KeyToken_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_roleId_fkey";

-- AlterTable
ALTER TABLE "public"."ApiKey" DROP CONSTRAINT "ApiKey_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(6) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ALTER COLUMN "permissions" SET DEFAULT ARRAY[]::"public"."ApiKeyPermission"[],
ADD CONSTRAINT "ApiKey_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Grant" DROP CONSTRAINT "Grant_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "roleId",
ADD COLUMN     "roleId" UUID NOT NULL,
DROP COLUMN "resourceId",
ADD COLUMN     "resourceId" UUID NOT NULL,
ADD CONSTRAINT "Grant_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."KeyToken" DROP CONSTRAINT "KeyToken_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(6) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" UUID NOT NULL,
ADD CONSTRAINT "KeyToken_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."OTP" DROP CONSTRAINT "OTP_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(6) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ALTER COLUMN "expiresAt" SET DEFAULT NOW() + INTERVAL '60 seconds',
ADD CONSTRAINT "OTP_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Resource" DROP CONSTRAINT "Resource_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Resource_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Role" DROP CONSTRAINT "Role_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Role_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(6) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "roleId",
ADD COLUMN     "roleId" UUID NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "public"."HistoricalEvent" (
    "id" UUID NOT NULL,
    "fromDay" SMALLINT,
    "fromMonth" SMALLINT,
    "fromYear" SMALLINT NOT NULL,
    "toDay" SMALLINT,
    "toMonth" SMALLINT,
    "toYear" SMALLINT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" UUID NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "HistoricalEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EventEdit" (
    "id" UUID NOT NULL,
    "eventId" UUID NOT NULL,
    "editorId" UUID NOT NULL,
    "editedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prevContent" TEXT NOT NULL,
    "newContent" TEXT NOT NULL,
    "prevFromDay" SMALLINT,
    "prevFromMonth" SMALLINT,
    "prevFromYear" SMALLINT NOT NULL,
    "prevToDay" SMALLINT,
    "prevToMonth" SMALLINT,
    "prevToYear" SMALLINT NOT NULL,
    "newFromDay" SMALLINT,
    "newFromMonth" SMALLINT,
    "newFromYear" SMALLINT NOT NULL,
    "newToDay" SMALLINT,
    "newToMonth" SMALLINT,
    "newToYear" SMALLINT NOT NULL,

    CONSTRAINT "EventEdit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EventPeriod" (
    "id" UUID NOT NULL,
    "fromDay" SMALLINT,
    "fromMonth" SMALLINT,
    "fromYear" SMALLINT NOT NULL,
    "toDay" SMALLINT,
    "toMonth" SMALLINT,
    "toYear" SMALLINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "description" TEXT,

    CONSTRAINT "EventPeriod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BlogPost" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BlogAuthor" (
    "authorId" UUID NOT NULL,
    "postId" UUID NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BlogAuthor_pkey" PRIMARY KEY ("authorId","postId")
);

-- CreateTable
CREATE TABLE "public"."_EventPeriods" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_EventPeriods_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "idx_event" ON "public"."EventEdit"("eventId");

-- CreateIndex
CREATE INDEX "idx_editor" ON "public"."EventEdit"("editorId");

-- CreateIndex
CREATE UNIQUE INDEX "EventPeriod_name_key" ON "public"."EventPeriod"("name");

-- CreateIndex
CREATE UNIQUE INDEX "EventPeriod_slug_key" ON "public"."EventPeriod"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "BlogPost_slug_key" ON "public"."BlogPost"("slug");

-- CreateIndex
CREATE INDEX "idx_post" ON "public"."BlogAuthor"("postId");

-- CreateIndex
CREATE INDEX "idx_author" ON "public"."BlogAuthor"("authorId");

-- CreateIndex
CREATE INDEX "_EventPeriods_B_index" ON "public"."_EventPeriods"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Grant_roleId_resourceId_action_key" ON "public"."Grant"("roleId", "resourceId", "action");

-- CreateIndex
CREATE UNIQUE INDEX "KeyToken_userId_browserId_key" ON "public"."KeyToken"("userId", "browserId");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Grant" ADD CONSTRAINT "Grant_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Grant" ADD CONSTRAINT "Grant_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "public"."Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."KeyToken" ADD CONSTRAINT "KeyToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."HistoricalEvent" ADD CONSTRAINT "HistoricalEvent_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EventEdit" ADD CONSTRAINT "EventEdit_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "public"."HistoricalEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EventEdit" ADD CONSTRAINT "EventEdit_editorId_fkey" FOREIGN KEY ("editorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BlogAuthor" ADD CONSTRAINT "BlogAuthor_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BlogAuthor" ADD CONSTRAINT "BlogAuthor_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."BlogPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_EventPeriods" ADD CONSTRAINT "_EventPeriods_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."EventPeriod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_EventPeriods" ADD CONSTRAINT "_EventPeriods_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."HistoricalEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
