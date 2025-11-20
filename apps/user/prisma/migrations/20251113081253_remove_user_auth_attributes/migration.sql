/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `uploaderId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - Added the required column `publicUrl` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Image" DROP CONSTRAINT "Image_uploaderId_fkey";

-- DropIndex
DROP INDEX "public"."User_username_key";

-- DropIndex
DROP INDEX "public"."idx_user_email";

-- DropIndex
DROP INDEX "public"."idx_user_username";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "createdAt",
DROP COLUMN "description",
DROP COLUMN "link",
DROP COLUMN "name",
DROP COLUMN "type",
DROP COLUMN "updatedAt",
DROP COLUMN "uploaderId",
DROP COLUMN "url",
ADD COLUMN     "publicUrl" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "roleId",
DROP COLUMN "username";

-- CreateIndex
CREATE INDEX "idx_user_slug" ON "User"("slug");
