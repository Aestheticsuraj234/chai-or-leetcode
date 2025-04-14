/*
  Warnings:

  - Changed the type of `sourceCode` on the `Submission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "sourceCode",
ADD COLUMN     "sourceCode" JSONB NOT NULL;
