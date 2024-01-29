import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const roleAdmin = await prisma.role.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      description: 'ADMIN',
      isAdmin: true
    },
  })

  const roleUser = await prisma.role.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      description: 'USER',
      isAdmin: true
    },
  })

  const admin = await prisma.user.upsert({
    where: { email: 'admin@email.com' },
    update: {},
    create: {
      email: 'admin@email.com',
      name: 'Admin Default',
      password: 'admin',
      age: 20,
      phone: '4002-8922',
      roles: {
        connect: {
            id: 1
        }
      }
    },
  })
  const user = await prisma.user.upsert({
    where: { email: 'user@email.com' },
    update: {},
    create: {
      email: 'user@email.com',
      name: 'User Default',
      password: 'user123',
      age: 20,
      phone: '4002-8922',
      roles: {
        connect: {
            id: 2
        }
      }
    },
  })
  console.log({ admin, user, roleAdmin, roleUser })
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