/*
  Warnings:

  - You are about to drop the `ProblemInSubtopic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sheet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subtopic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Topic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProblemInSubtopic" DROP CONSTRAINT "ProblemInSubtopic_problemId_fkey";

-- DropForeignKey
ALTER TABLE "ProblemInSubtopic" DROP CONSTRAINT "ProblemInSubtopic_subtopicId_fkey";

-- DropForeignKey
ALTER TABLE "Sheet" DROP CONSTRAINT "Sheet_userId_fkey";

-- DropForeignKey
ALTER TABLE "Subtopic" DROP CONSTRAINT "Subtopic_topicId_fkey";

-- DropForeignKey
ALTER TABLE "Topic" DROP CONSTRAINT "Topic_sheetId_fkey";

-- DropTable
DROP TABLE "ProblemInSubtopic";

-- DropTable
DROP TABLE "Sheet";

-- DropTable
DROP TABLE "Subtopic";

-- DropTable
DROP TABLE "Topic";

-- CreateTable
CREATE TABLE "Playlist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProblemInPlaylist" (
    "id" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProblemInPlaylist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Playlist_name_userId_key" ON "Playlist"("name", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProblemInPlaylist_playlistId_problemId_key" ON "ProblemInPlaylist"("playlistId", "problemId");

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProblemInPlaylist" ADD CONSTRAINT "ProblemInPlaylist_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProblemInPlaylist" ADD CONSTRAINT "ProblemInPlaylist_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
