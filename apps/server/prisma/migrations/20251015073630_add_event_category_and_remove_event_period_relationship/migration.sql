/*
  Warnings:

  - You are about to drop the `_EventPeriods` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_EventPeriods" DROP CONSTRAINT "_EventPeriods_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_EventPeriods" DROP CONSTRAINT "_EventPeriods_B_fkey";

-- AlterTable
ALTER TABLE "public"."HistoricalEvent" ADD COLUMN     "categoryIds" UUID[];

-- AlterTable
ALTER TABLE "public"."OTP" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + INTERVAL '60 seconds';

-- DropTable
DROP TABLE "public"."_EventPeriods";

-- CreateTable
CREATE TABLE "public"."EventCategory" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "description" TEXT,

    CONSTRAINT "EventCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_EventCategories" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_EventCategories_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventCategory_name_key" ON "public"."EventCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "EventCategory_slug_key" ON "public"."EventCategory"("slug");

-- CreateIndex
CREATE INDEX "idx_category_slug" ON "public"."EventCategory"("slug");

-- CreateIndex
CREATE INDEX "_EventCategories_B_index" ON "public"."_EventCategories"("B");

-- CreateIndex
CREATE INDEX "idx_blog_status" ON "public"."BlogPost"("status");

-- CreateIndex
CREATE INDEX "idx_blog_author" ON "public"."BlogPost"("authorId");

-- CreateIndex
CREATE INDEX "idx_blog_slug" ON "public"."BlogPost"("slug");

-- CreateIndex
CREATE INDEX "idx_grant_role" ON "public"."Grant"("roleId");

-- CreateIndex
CREATE INDEX "idx_event_from_year" ON "public"."HistoricalEvent"("fromYear");

-- CreateIndex
CREATE INDEX "idx_event_from_month" ON "public"."HistoricalEvent"("fromMonth");

-- CreateIndex
CREATE INDEX "idx_event_from_day" ON "public"."HistoricalEvent"("fromDay");

-- CreateIndex
CREATE INDEX "idx_event_to_year" ON "public"."HistoricalEvent"("toYear");

-- CreateIndex
CREATE INDEX "idx_event_to_month" ON "public"."HistoricalEvent"("toMonth");

-- CreateIndex
CREATE INDEX "idx_event_to_day" ON "public"."HistoricalEvent"("toDay");

-- CreateIndex
CREATE INDEX "idx_event_categories" ON "public"."HistoricalEvent"("categoryIds");

-- CreateIndex
CREATE INDEX "idx_otp_email" ON "public"."OTP"("email");

-- CreateIndex
CREATE INDEX "idx_otp_status" ON "public"."OTP"("status");

-- CreateIndex
CREATE INDEX "idx_otp_expires_at" ON "public"."OTP"("expiresAt");

-- CreateIndex
CREATE INDEX "idx_role_status" ON "public"."Role"("status");

-- CreateIndex
CREATE INDEX "idx_role_slug" ON "public"."Role"("slug");

-- CreateIndex
CREATE INDEX "idx_user_username" ON "public"."User"("username");

-- CreateIndex
CREATE INDEX "idx_user_email" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."_EventCategories" ADD CONSTRAINT "_EventCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."EventCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_EventCategories" ADD CONSTRAINT "_EventCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."HistoricalEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "public"."idx_editor" RENAME TO "idx_edit_editor";

-- RenameIndex
ALTER INDEX "public"."idx_event" RENAME TO "idx_edit_event";
