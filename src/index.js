const {prisma} = require('./database/prismaConfig')
async function testConnection() {
  try {
    await prisma.$queryRaw`SELECT 1`;

    console.log("✅ Database connection successful");
  } catch (error) {
    console.error("❌ Database connection failed");
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();