/*
  Warnings:

  - Added the required column `referenceSolutions` to the `Problem` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Problem_title_key";

-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "referenceSolutions" JSONB NOT NULL,
ALTER COLUMN "hints" SET DATA TYPE TEXT,
ALTER COLUMN "editorial" SET DATA TYPE TEXT;
