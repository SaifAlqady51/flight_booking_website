import { PrismaClient } from '../../prisma/generated/client';
import { withAccelerate } from '@prisma/extension-accelerate';


declare global {
	var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient({ log: ["info"] });
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
