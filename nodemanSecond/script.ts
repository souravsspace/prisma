import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
   const user = await prisma.user.create({
      data: {
         name: "Alice",
         email: "alice231@gmail.com",
      },
   })
   console.log(user)
}

main()
   .catch((e) => {
      console.log("Some error occurred: " + e)
   })
   .finally(async () => {
      await prisma.$disconnect()
   })
