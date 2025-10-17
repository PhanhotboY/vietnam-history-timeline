/*
  Warnings:

  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - Added the required column `name` to the `HistoricalEvent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailId` to the `HistoricalEvent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."HistoricalEvent" ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ADD COLUMN     "thumbnailId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "public"."OTP" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + INTERVAL '60 seconds';

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "avatar",
ADD COLUMN     "avatarId" UUID;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "public"."Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."HistoricalEvent" ADD CONSTRAINT "HistoricalEvent_thumbnailId_fkey" FOREIGN KEY ("thumbnailId") REFERENCES "public"."Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
