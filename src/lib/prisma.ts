import { PrismaClient } from '../../prisma/generated/client';
import { withAccelerate } from '@prisma/extension-accelerate';

declare global {
    /* eslint-disable */
    var prismaGlobal: any | undefined;
}

const prisma =
    global.prismaGlobal?.$extends(withAccelerate()) ||
    new PrismaClient({ log: ['info'] }).$extends(withAccelerate());
if (process.env.NODE_ENV !== 'production') global.prismaGlobal = prisma;

export default prisma;

// import { PrismaClient } from '@prisma/client'
// import globalThis from 'globalthis';
// import {withAccelerate} from '@prisma/extension-accelerate';

// const prismaClientSingleton = () => {
//   return new PrismaClient()
// }

// type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClientSingleton | undefined
// }

// const prisma = globalForPrisma.prisma ?? prismaClientSingleton().$extends(withAccelerate())

// export default prisma

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
