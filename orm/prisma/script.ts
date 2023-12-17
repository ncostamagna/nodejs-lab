import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    // create user
    const user = await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alice3@prisma.io',  // unique
        },
      })
      console.log("store user: ", user)

      // create user with a post
      const storeUserWithPost = await prisma.user.create({
        data: {
          name: 'Bob',
          email: 'bob3@prisma.io', // unique
          posts: {
            create: {
              title: 'Hello World',
            },
          },
        },
      })
      console.log("store user with post: ", storeUserWithPost)

      // get users
      const users = await prisma.user.findMany()
      console.log("get all: ", users)

      // get users with posts
      const usersWithPosts = await prisma.user.findMany({
        include: {
          posts: true,
        },
      })
      console.dir(usersWithPosts, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })