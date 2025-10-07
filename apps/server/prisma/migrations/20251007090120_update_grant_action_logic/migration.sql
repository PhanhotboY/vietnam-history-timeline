/*
  Warnings:

  - You are about to drop the column `actions` on the `Grant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[roleId,resourceId,action]` on the table `Grant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `action` to the `Grant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attribute` to the `Grant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Grant" DROP COLUMN "actions",
ADD COLUMN     "action" VARCHAR(20) NOT NULL,
ADD COLUMN     "attribute" VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE "public"."OTP" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + INTERVAL '60 seconds';

-- CreateIndex
CREATE UNIQUE INDEX "Grant_roleId_resourceId_action_key" ON "public"."Grant"("roleId", "resourceId", "action");
