-- DropForeignKey
ALTER TABLE "public"."Image" DROP CONSTRAINT "Image_uploaderId_fkey";

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_uploaderId_fkey" FOREIGN KEY ("uploaderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
