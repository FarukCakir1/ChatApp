const express = require("express")
const cors = require("cors")
const config = require("./config")
const loaders = require("./loaders")
const fileUpload = require("express-fileupload")
const path = require("path")
const app = express()

const { UserRoutes, ChatsRoutes } = require("./routes/index")

config()
loaders()
app.use("/uploads", express.static(path.join(__dirname , "./", "uploads")))
app.use(express.json())
app.use(cors())
app.use(fileUpload())


app.listen(process.env.APP_PORT, () => {
    console.log(`Server started at port ${process.env.APP_PORT}`)
    app.use("/users", UserRoutes)
    app.use("/chats", ChatsRoutes)
})