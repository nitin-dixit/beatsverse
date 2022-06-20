import { PrismaClient } from "@prisma/client"; // so that we don't have to import the whole @prisma/client package again and again

export default new PrismaClient();
