import { PrismaClient } from "@prisma/client";
// Расширить глобальный объект, включив в него экземпляр PrismaClient
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma || new PrismaClient();
// Гарантировать, что экземпляр PrismaClient не будет создан заново в процессе разработки
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma;
