const userServices = require("../services/users.service")

const create = async(req,res) => {
    try {
        const { username, email, fullname, bio } = req.body

        if (!username || !email || !fullname) {
            return res.status(400).json({ error: "username, email and fullname are required" })
        }

        const user = await userServices.createUser({ username, email, fullname, bio })
        res.status(201).json(user)
    }
    catch (err) {
        res.json({ error: "Something went wrong" })
    }
}

const list = async(req,res) => {
    try {
        const users = await userServices.listUsers()
        res.json(users)
    }
    catch (err) {
        res.json({ error: "Something went wrong" })
    }
}

const getOne = async(req,res) => {
    try {
        const user = await userServices.getUserById(Number(req.params.id))

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        res.json(user)
    }
    catch (err) {
        res.json({ error: "Something went wrong" })
    }
}

const update = async(req,res) => {
    try {
        const data = {}

        if (req.body.fullname !== undefined) data.fullname = req.body.fullname
        if (req.body.bio !== undefined) data.bio = req.body.bio
        if (req.body.isPrivate !== undefined) data.isPrivate = req.body.isPrivate

        const user = await userServices.updateUser(Number(req.params.id), data)
        res.json(user)
    }
    catch (err) {
        res.json({ error: "Something went wrong" })
    }
}

const remove = async(req,res) => {
    try {
        await userServices.deleteUser(Number(req.params.id))
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
