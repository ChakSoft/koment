'use strict'

const { Model } = require('objection')

class PageModel extends Model {
    static get tableName() {
        return 'pages'
    }
}

module.exports = PageModel
