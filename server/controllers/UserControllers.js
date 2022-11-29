const { insert, getData, userLogin, newChat, updatePP } = require("../services/UserServices")
const { cryptedPassword } = require("../Utils/helpers")
const httpstatus = require("http-status")
const path = require("path")


const create = (req, res) => {
    req.body.password = cryptedPassword(req.body.password)
    insert(req.body)
        .then(response => res.status(httpstatus.OK).send(response))
        .catch(err => res.status(httpstatus.INTERNAL_SERVER_ERROR).send(err))
}

const read = (req, res) => {
    getData()
        .then(response => res.status(httpstatus.OK).send(response))
        .catch(err => res.status(httpstatus.INTERNAL_SERVER_ERROR).send(err))
}

const login = (req, res) => {
    req.body.password = cryptedPassword(req.body.password)
    userLogin(req.body)
        .then(response => res.status(httpstatus.OK).send(response))
        .catch(err => res.status(httpstatus.INTERNAL_SERVER_ERROR).send(err))
}

const createNewChat = (req, res) => {
    newChat(req.body)
        .then(response => res.status(httpstatus.OK).send(response))
        .catch(err => res.status(httpstatus.INTERNAL_SERVER_ERROR).send(err))
}

const profilePicUpdate = (req, res) => {
    const folderPath = path.join(__dirname, "../", "uploads/users", req.files.profil_pic.name)
    req.files.profil_pic.mv(folderPath)

    updatePP(req.body._id, "http://localhost:5000/uploads/users/" + req.files.profil_pic.name)
        .then(response => res.status(httpstatus.OK).send(response))
        .catch(err => res.status(httpstatus.INTERNAL_SERVER_ERROR).send(err))
}



module.exports = {
    create,
    read,
    login,
    createNewChat,
    profilePicUpdate
}