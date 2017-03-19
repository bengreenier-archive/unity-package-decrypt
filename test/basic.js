const assert = require('assert')
const fs = require('fs')
const stream = require('stream')
const UnityDecryptClient = require('../').UnityDecryptClient

describe('UnityDecryptClient', () => {
    it('should construct', () => {
        new UnityDecryptClient()
    })

    it('should createDecryptStream', () => {
        const client = new UnityDecryptClient()

        const keySrc = fs.readFileSync(`${__dirname}/19248.pkg.key`).toString()
        const dStream = client.createDecryptStream(keySrc)

        assert.ok(dStream instanceof stream.Duplex)
    })

    it('should decrypt', (done) => {
        const client = new UnityDecryptClient()

        const src = fs.readFileSync(`${__dirname}/19248.pkg`, {
            encoding: 'binary'
        })
        const keySrc = fs.readFileSync(`${__dirname}/19248.pkg.key`).toString()
        
        client.decrypt(src, keySrc)
            .then((data) => {
                assert.ok(typeof data != 'undefined')
                assert.equal(data.length, 3171523)
                done()
            }, done)
    })
})