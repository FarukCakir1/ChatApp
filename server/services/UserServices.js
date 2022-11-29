const UserModel = require("../models/UserModel")

const insert = (user) => {
    const newUser = new UserModel(user)
    return newUser.save()
}

const getData = () => {
    return UserModel.find({})    
}

const userLogin = (userData) => {
    return UserModel.findOne(userData)
}

const newChat = (_id, chat) => {
    return UserModel.findByIdAndUpdate(_id, {$push: {chats: chat}}, {new:true})
}

const updatePP = (_id, url) => {
    return UserModel.findByIdAndUpdate(_id, {'profil_pic': url}, {new: true})
}


module.exports = {
    insert,
    getData,
    userLogin,
    newChat,
    updatePP
}