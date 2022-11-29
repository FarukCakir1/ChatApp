const express = require("express")
const router = express.Router()

const {insert, read, newMessage} = require("../controllers/ChatControllers")


router.post("/", insert)
router.get("/", read)
router.post("/:id", newMessage)


module.exports = router