-- CreateEnum
CREATE TYPE "Author" AS ENUM ('Nisrina', 'Cantika');

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "body" VARCHAR(1255) NOT NULL,
    "author" "Author" NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
