/*
  Warnings:

  - A unique constraint covering the columns `[userId,browserId]` on the table `KeyToken` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."OTP" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + INTERVAL '60 seconds';

-- CreateIndex
CREATE UNIQUE INDEX "KeyToken_userId_browserId_key" ON "public"."KeyToken"("userId", "browserId");
