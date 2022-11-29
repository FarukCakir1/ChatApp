const {create, getData, sendMessage} = require("../services/ChatServices")
const httpstatus = require("http-status")

const insert = (req, res) => {
    create(req.body)
        .then(response => res.status(httpstatus.OK).send(response))
        .catch(err => res.status(httpstatus.INTERNAL_SERVER_ERROR).send(err))
}

const read = (req, res) => {
    getData()
        .then(response => res.status(httpstatus.OK).send(response))
        .catch(err => res.status(httpstatus.INTERNAL_SERVER_ERROR).send(err))
}

const newMessage = (req, res)  => {
    sendMessage(req.params.id, req.body)
        .then(response => res.status(httpstatus.OK).send(response))
        .catch(err => res.status(httpstatus.INTERNAL_SERVER_ERROR).send(err))
}



module.exports = {
    insert,
    read,
    newMessage
}