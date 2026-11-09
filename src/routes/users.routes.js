const express = require("express")
const userRouter = express.Router()
const controller = require("../controllers/users.controller")

userRouter.post("/", controller.create)
userRouter.get("/", controller.list)
userRouter.get("/:id", controller.getOne)
userRouter.patch("/:id", controller.update)
userRouter.delete("/:id", controller.remove)

module.exports = userRouter
