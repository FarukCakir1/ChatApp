const ChatModel = require("../models/ChatModel")


const create = (data) => {
    const newChat = new ChatModel(data)

    return newChat.save()
}

const getData = () => {
    return ChatModel.find({})
}

const sendMessage = (id, message) => {
    return ChatModel.findByIdAndUpdate(id, {$push: {messages: message }}, {new: true})
}



module.exports = {
    create,
    getData,
    sendMessage
}