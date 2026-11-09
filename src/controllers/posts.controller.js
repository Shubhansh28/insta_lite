const postServices = require("../services/posts.service")

const create = async(req,res) => {
    try {
        const { imageUrl, caption, location, authorId } = req.body

        if (!imageUrl || authorId === undefined) {
            return res.status(400).json({ error: "imageUrl and authorId are required" })
        }

        const post = await postServices.createPost({
            imageUrl,
            caption,
            location,
            authorId: Number(authorId)
        })
        res.status(201).json(post)
    }
    catch (err) {
        res.json({ error: "Something went wrong" })
    }
}

const list = async(req,res) => {
    try {
        const posts = await postServices.listPosts()
        res.json(posts)
    }
    catch (err) {
        res.json({ error: "Something went wrong" })
    }
}

const getOne = async(req,res) => {
    try {
        const post = await postServices.getPostById(Number(req.params.id))

        if (!post) {
            return res.status(404).json({ error: "Post not found" })
        }

        res.json(post)
    }
    catch (err) {
        res.json({ error: "Something went wrong" })
    }
}

const update = async(req,res) => {
    try {
        const data = {}

        if (req.body.caption !== undefined) data.caption = req.body.caption
        if (req.body.location !== undefined) data.location = req.body.location

        const post = await postServices.updatePost(Number(req.params.id), data)
        res.json(post)
    }
    catch (err) {
        res.json({ error: "Something went wrong" })
    }
}

const remove = async(req,res) => {
    try {
        await postServices.deletePost(Number(req.params.id))
        res.status(204).send()
    }
    catch (err) {
        res.json({ error: "Something went wrong" })
    }
}

module.exports = {
    create,
    list,
    getOne,
    update,
    remove
}
