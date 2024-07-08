const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function registerDb (username, password) {
    return await prisma.user.create({
        data: {
            username: username,
            password: password
        }
    })
}

module.exports = { registerDb }