'use strict'

const Chai = require('chai')
const ChaiHTTP = require('chai-http')

const Server = require('../index')

Chai.use(ChaiHTTP)

describe('Domain Tests', () => {
    before((done) => {
    })
    it('Create a new domain', (done) => {
        Chai.request(Server)
            .post('/domain')
            .send({
                name : 'Test Domain',
                dns : 'domain.example.com',
            })
            .then((res) => {
                res.status.should.be(200)
                res.body.should.have.property('id', 1)
                res.body.should.have.property('key')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })
    it('Get domains', (done) => {
        Chai.request(Server)
            .get('/domain')
            .then((res) => {
                res.status.should.be(200)
                res.body.should.be.an('array')
                res.body.should.have.lengthOf(1)

                const domain = res.body[0]
                domain.should.be.an('object')
                domain.should.have.property('name', 'Test Domain')
                domain.should.have.property('dns', 'domain.example.com')
                domain.should.have.property('key')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })
    it('Get one domain', (done) => {
        Chai.request(Server)
            .get('/domain/1')
            .then((res) => {
                res.status.should.be(200)
                res.body.should.be.an('object')
                res.body.should.have.property('name', 'Test Domain')
                res.body.should.have.property('dns', 'domain.example.com')
                res.body.should.have.property('key')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })
    it('Update a domain', (done) => {
        Chai.request(Server)
            .patch('/domain/1')
            .send({
                name : 'Another test Domain',
            })
            .then((res) => {
                res.status.should.be(200)
                res.body.should.be.an('object')
                res.body.should.have.property('name', 'Another Test Domain')
                res.body.should.have.property('dns', 'domain.example.com')
                res.body.should.have.property('key')
                done()
            })
            .catch((err) => done(err))
    })
    it('Delete a domain', (done) => {
        Chai.request(Server)
            .delete('/domain/1')
            .then((res) => {
                res.status.should.be(200)
                res.body.should.be.an('object')
                res.body.should.have.property('name', 'Another Test Domain')
                res.body.should.have.property('dns', 'domain.example.com')
                res.body.should.have.property('key')
                res.body.should.have.property('deleted', 1)
                done()
            })
            .catch((err) => done(err))
    })
    after((done) => {
    })
})
