-- AlterTable
ALTER TABLE "public"."OTP" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + INTERVAL '60 seconds';
