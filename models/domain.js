'use strict'

const { Model } = require('objection')

class DomainModel extends Model {
    static get tableName() {
        return 'domains'
    }
}

module.exports = DomainModel
