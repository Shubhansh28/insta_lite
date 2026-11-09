const express = require("express")
const postRouter = express.Router()
const controller = require("../controllers/posts.controller")

postRouter.post("/", controller.create)
postRouter.get("/", controller.list)
postRouter.get("/:id", controller.getOne)
postRouter.patch("/:id", controller.update)
postRouter.delete("/:id", controller.remove)

module.exports = postRouter
