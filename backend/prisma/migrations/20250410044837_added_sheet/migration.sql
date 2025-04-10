-- CreateTable
CREATE TABLE "Sheet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sheetId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subtopic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "topicId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subtopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProblemInSubtopic" (
    "id" TEXT NOT NULL,
    "subtopicId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProblemInSubtopic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Sheet_userId_idx" ON "Sheet"("userId");

-- CreateIndex
CREATE INDEX "Topic_sheetId_idx" ON "Topic"("sheetId");

-- CreateIndex
CREATE INDEX "Subtopic_topicId_idx" ON "Subtopic"("topicId");

-- CreateIndex
CREATE UNIQUE INDEX "ProblemInSubtopic_subtopicId_problemId_key" ON "ProblemInSubtopic"("subtopicId", "problemId");

-- AddForeignKey
ALTER TABLE "Sheet" ADD CONSTRAINT "Sheet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "Sheet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subtopic" ADD CONSTRAINT "Subtopic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProblemInSubtopic" ADD CONSTRAINT "ProblemInSubtopic_subtopicId_fkey" FOREIGN KEY ("subtopicId") REFERENCES "Subtopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProblemInSubtopic" ADD CONSTRAINT "ProblemInSubtopic_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
