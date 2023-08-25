model User {
    id       Int       @id @default(autoincrement())
    username String    @unique
    email    String    @unique
    password String
    comments Comment[]
  }
  
  model Comment {
    id          Int      @id @default(autoincrement())
    createdTime DateTime @default(now())
    content     String
    userId      Int
    user        User     @relation(fields: [userId], references: [id])
  }
  