const express = require("express")
const userRouter = require("./routes/users.routes")
const postRouter = require("./routes/posts.routes")

const app = express()
const port = 3000

app.use(express.json())

app.get("/health", (req,res) => {
    res.status(200).json({ status: "OK" })
})

app.use("/users", userRouter)
app.use("/posts", postRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})