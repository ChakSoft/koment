'use strict'

const { Domain } = require('../models')

module.exports = {
    create({ name, dns }) {
        return Domain
            .query()
            .insertAndFetch({ name, dns })
    },
    all() {
        return Domain
            .query()
    },
    list() {
        return Domain
            .query()
            .where({ deleted : 0 })
    },
    getOne({ id }) {
        return Domain
            .query()
            .where({ id })
    },
    update({ id, name }) {
        return Domain
            .query()
            .updateAndFetchById(id, { name })
    },
    delete({ id }) {
        return Domain
            .query()
            .updateAndFetchById(id, { deleted : 1 })
    },
}
