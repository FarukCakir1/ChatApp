const mongoose = require("mongoose")
const logger = require("../loggers/UserLogger")

const schema = new mongoose.Schema(
    {
        full_name: String,
        e_mail: String,
        password: String,
        profil_pic: String,
    },
    {
        versionKey: false
    }
)

schema.post("save", (obj) => {
    logger.log({
        level: "info",
        message: `${obj.full_name} Kayıt oldu.. e-mail adresi: ${obj.e_mail}`
    })
})

const userModel = mongoose.model("user", schema)

module.exports = userModel