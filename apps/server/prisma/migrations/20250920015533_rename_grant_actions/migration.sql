/*
  Warnings:

  - You are about to drop the column `action` on the `Grant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Grant" DROP COLUMN "action",
ADD COLUMN     "actions" VARCHAR(20)[];

-- AlterTable
ALTER TABLE "public"."OTP" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + INTERVAL '60 seconds';
