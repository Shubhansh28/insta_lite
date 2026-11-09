const { prisma } = require("../config/prismaConfig")

const createUser = (data) => {
    return prisma.user.create({ data })
}

const listUsers = () => {
    return prisma.user.findMany()
}

const getUserById = (id) => {
    return prisma.user.findUnique({
        where: { id }
    })
}

const updateUser = (id, data) => {
    return prisma.user.update({
        where: { id },
        data
    })
}

const deleteUser = (id) => {
    return prisma.user.delete({
        where: { id }
    })
}

module.exports = {
    createUser,
    listUsers,
    getUserById,
    updateUser,
    deleteUser
}
