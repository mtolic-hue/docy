-- CreateTable
CREATE TABLE "Child" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "birthDate" DATETIME,
    "notes" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Child_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Check" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weightKg" REAL NOT NULL,
    "temperatureC" REAL NOT NULL,
    "temperatureStatus" TEXT NOT NULL,
    "paracetamolMl" REAL NOT NULL,
    "nurofenMl" REAL NOT NULL,
    "lastGivenParacetamolAt" DATETIME,
    "lastGivenNurofenAt" DATETIME,
    "nextParacetamolAt" DATETIME,
    "nextNurofenAt" DATETIME,
    "canGiveNow" BOOLEAN NOT NULL,
    "childId" TEXT NOT NULL,
    CONSTRAINT "Check_childId_fkey" FOREIGN KEY ("childId") REFERENCES "Child" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
