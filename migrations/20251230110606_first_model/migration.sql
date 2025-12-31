-- CreateTable
CREATE TABLE "Child" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3),
    "notes" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Child_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Check" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weightKg" DOUBLE PRECISION NOT NULL,
    "temperatureC" DOUBLE PRECISION NOT NULL,
    "temperatureStatus" TEXT NOT NULL,
    "paracetamolMl" DOUBLE PRECISION NOT NULL,
    "nurofenMl" DOUBLE PRECISION NOT NULL,
    "lastGivenParacetamolAt" TIMESTAMP(3),
    "lastGivenNurofenAt" TIMESTAMP(3),
    "nextParacetamolAt" TIMESTAMP(3),
    "nextNurofenAt" TIMESTAMP(3),
    "canGiveNow" BOOLEAN NOT NULL,
    "childId" TEXT NOT NULL,

    CONSTRAINT "Check_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Child" ADD CONSTRAINT "Child_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Check" ADD CONSTRAINT "Check_childId_fkey" FOREIGN KEY ("childId") REFERENCES "Child"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
