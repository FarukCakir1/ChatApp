const socketio = require("socket.io")
const express = require("express")
const app = express()
const http = require("http")

const server = http.createServer(app)
const PORT = 5050


const io = socketio(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "OPTİONS"]
    },

})

server.listen(PORT, () => {
    io.on("connection", socket => {
        socket.on("SEND_MESSAGE", (data) => {
            io.emit("MESSAGE_SENDED", data)
        })
    })
})