'use strict'

const Objection = require('objection')
const Model = Objection.Model
const Knex = require('knex')
const { database } = require('../config')

const knex = Knex({
    client : 'mysql',
    connection : {
        host : database.host,
        port : database.port,
        user : database.user,
        password : database.pass,
        database : database.name,
    },
})

Model.knex(knex)

module.exports = {
    Comment : require('./comment'),
    Domain : require('./domain'),
    Page : require('./page'),
}
