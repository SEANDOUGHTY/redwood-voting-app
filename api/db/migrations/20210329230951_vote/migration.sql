/*
  Warnings:

  - You are about to drop the column `email` on the `UserExample` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `UserExample` table. All the data in the column will be lost.
  - Added the required column `vote` to the `UserExample` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UserExample.email_unique";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserExample" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vote" TEXT NOT NULL,
    "dateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_UserExample" ("id") SELECT "id" FROM "UserExample";
DROP TABLE "UserExample";
ALTER TABLE "new_UserExample" RENAME TO "UserExample";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
