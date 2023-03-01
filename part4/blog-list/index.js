const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')
console.log(config.MONGODB_URI)

app.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}`)
})
