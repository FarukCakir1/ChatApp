const winston = require("winston")


const logger = winston.createLogger({
    level:"info",
    format: winston.format.json(),
    defaultMeta: {service: "notes-service"},
    transports: [
        new winston.transports.File({filename: "logs/info.log", level: "info"})
    ]
        
    
})

module.exports = logger