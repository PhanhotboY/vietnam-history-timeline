-- DropForeignKey
ALTER TABLE "public"."Grant" DROP CONSTRAINT "Grant_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Grant" DROP CONSTRAINT "Grant_roleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."KeyToken" DROP CONSTRAINT "KeyToken_userId_fkey";

-- AlterTable
ALTER TABLE "OTP" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + INTERVAL '60 seconds';

-- AddForeignKey
ALTER TABLE "Grant" ADD CONSTRAINT "Grant_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grant" ADD CONSTRAINT "Grant_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeyToken" ADD CONSTRAINT "KeyToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
