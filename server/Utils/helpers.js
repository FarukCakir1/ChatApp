const cryptojs = require("crypto-js")


const cryptedPassword = (password) => {
    return cryptojs.SHA1(password, process.env.CRYPTED_KEY).toString()
}


module.exports = {
    cryptedPassword
}