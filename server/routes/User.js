const express = require("express")
const router = express.Router()

const { create, read, login, createNewChat, profilePicUpdate } = require("../controllers/UserControllers")

router.post("/", create)
router.get("/", read)
router.post("/login", login)
router.post("/new-chat", createNewChat)
router.post("/updatepic", profilePicUpdate)


module.exports = router