const { prisma } = require("../config/prismaConfig")

const createPost = (data) => {
    return prisma.post.create({ data })
}

const listPosts = () => {
    return prisma.post.findMany()
}

const getPostById = (id) => {
    return prisma.post.findUnique({
        where: { id }
    })
}

const updatePost = (id, data) => {
    return prisma.post.update({
        where: { id },
        data
    })
}

const deletePost = (id) => {
    return prisma.post.delete({
        where: { id }
    })
}

module.exports = {
    createPost,
    listPosts,
    getPostById,
    updatePost,
    deletePost
}
