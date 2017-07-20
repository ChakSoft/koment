'use strict'

const { Model } = require('objection')

class CommentModel extends Model {
    static get tableName() {
        return 'comment'
    }
}

module.exports = CommentModel
