/*
  Warnings:

  - You are about to drop the `BlogAuthor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorId` to the `BlogPost` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."BlogStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- DropForeignKey
ALTER TABLE "public"."BlogAuthor" DROP CONSTRAINT "BlogAuthor_authorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."BlogAuthor" DROP CONSTRAINT "BlogAuthor_postId_fkey";

-- AlterTable
ALTER TABLE "public"."BlogPost" ADD COLUMN     "authorId" UUID NOT NULL,
ADD COLUMN     "excerpt" TEXT,
ADD COLUMN     "status" "public"."BlogStatus" NOT NULL DEFAULT 'DRAFT',
ADD COLUMN     "thumbnailId" UUID;

-- AlterTable
ALTER TABLE "public"."EventEdit" ALTER COLUMN "prevToYear" DROP NOT NULL,
ALTER COLUMN "newFromYear" DROP NOT NULL,
ALTER COLUMN "newToYear" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."HistoricalEvent" ALTER COLUMN "toYear" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."OTP" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + INTERVAL '60 seconds';

-- DropTable
DROP TABLE "public"."BlogAuthor";

-- CreateTable
CREATE TABLE "public"."Image" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "caption" TEXT,
    "description" TEXT,
    "url" VARCHAR(255) NOT NULL,
    "link" VARCHAR(255),
    "type" VARCHAR(100),
    "uploaderId" UUID NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_uploaderId_fkey" FOREIGN KEY ("uploaderId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BlogPost" ADD CONSTRAINT "BlogPost_thumbnailId_fkey" FOREIGN KEY ("thumbnailId") REFERENCES "public"."Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BlogPost" ADD CONSTRAINT "BlogPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
