-- CreateTable
CREATE TABLE "MeetingCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT DEFAULT '',

    CONSTRAINT "MeetingCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MeetingCategory_name_key" ON "MeetingCategory"("name");

-- AlterTable
ALTER TABLE "Meetings" ADD COLUMN "categoryId" INTEGER;

-- AddForeignKey
ALTER TABLE "Meetings" ADD CONSTRAINT "Meetings_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MeetingCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Initial Categories
INSERT INTO "MeetingCategory" ("name", "description") 
VALUES 
('All Core Devs EL', 'Execution Layer meetings for Ethereum core developers'),
('All Core Devs CL', 'Consensus Layer meetings for Ethereum core developers'),
('Breakout Room Meetings', 'Smaller focused discussions on specific topics');
