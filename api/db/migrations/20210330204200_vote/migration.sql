/*
  Warnings:

  - You are about to drop the column `vote` on the `Vote` table. All the data in the column will be lost.
  - Added the required column `choice` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "choice" TEXT NOT NULL,
    "dateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Vote" ("id", "dateTime") SELECT "id", "dateTime" FROM "Vote";
DROP TABLE "Vote";
ALTER TABLE "new_Vote" RENAME TO "Vote";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
