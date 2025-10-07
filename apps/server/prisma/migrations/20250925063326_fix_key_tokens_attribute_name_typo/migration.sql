/*
  Warnings:

  - You are about to drop the column `refreshTokenUsed` on the `KeyToken` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."KeyToken" DROP COLUMN "refreshTokenUsed",
ADD COLUMN     "refreshTokensUsed" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "public"."OTP" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + INTERVAL '60 seconds';
