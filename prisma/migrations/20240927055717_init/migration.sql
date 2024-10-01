-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "firstNameOne" TEXT NOT NULL,
    "firstNameTwo" TEXT,
    "lastNameOne" TEXT NOT NULL,
    "lastNameTwo" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
