const mongoose = require("mongoose")


const schema = new mongoose.Schema(
    {
        users: Array,
        messages: Array
    },
    {
        versionKey: false,
        timestamps: true
    }
)


const chatModel = mongoose.model("chat", schema)


module.exports = chatModel