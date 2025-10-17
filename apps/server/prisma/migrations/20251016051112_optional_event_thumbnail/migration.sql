-- DropForeignKey
ALTER TABLE "public"."HistoricalEvent" DROP CONSTRAINT "HistoricalEvent_thumbnailId_fkey";

-- AlterTable
ALTER TABLE "public"."HistoricalEvent" ALTER COLUMN "thumbnailId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."OTP" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + INTERVAL '60 seconds';

-- AddForeignKey
ALTER TABLE "public"."HistoricalEvent" ADD CONSTRAINT "HistoricalEvent_thumbnailId_fkey" FOREIGN KEY ("thumbnailId") REFERENCES "public"."Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
