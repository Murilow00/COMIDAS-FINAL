-- CreateTable
CREATE TABLE "comidas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "comidas_pkey" PRIMARY KEY ("id")
);
