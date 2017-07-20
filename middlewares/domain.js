'use strict'

const Express = require('express')
const router = Express.Router()

const { DomainController } = require('../controllers')

router
    .get('/', (req, res) => {
        DomainController.all()
            .then((domains) => res.json(domains))
            .catch((err) => res.status(400).json({ error : err.message }))
    })
    .get('/:id', (req, res) => {
        DomainController.getOne(req.params)
            .then((domain) => res.json(domain))
            .catch((err) => res.status(400).json({ error : err.message }))
    })

module.exports = router
