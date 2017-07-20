'use strict'
/**
 * Koment 1.0
 * 
 * Open Source comment system
 */

const Express = require('express')
const BodyParser = require('body-parser')
const Compression = require('compression')
const Cors = require('cors')
const Logger = require('./util/log')

const { port } = require('./config')

const app = Express()

app
    .use(BodyParser.json())
    .use(BodyParser.urlencoded({ extended : true }))
    .use(Compression())
    .use(Cors())

if (!module.parent) {
    app.listen(port, () => {
        Logger.info(`Listening on port ${port}`)
    })
}

module.exports = app
