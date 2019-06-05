'use strict'

const api = require('./lib/api')
const bodyParser = require('body-parser')
const co = require('co')
const cors = require('cors')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_DEV !== 'production' // true false
const app = next({ dev })
const handle = app.getRequestHandler() // part of next config

const router = require('express').Router()
const XIVAPI = require('xivapi-js')
const PORT = process.env.PORT || 3000

// Don't worry about co for now! It does magic that makes things cleaner and smoother.
// Instead pay attention to the things it's around.
co(function * () {
    yield app.prepare()

    console.log(`Connecting to xivapi...`)
    // connects our back end code to XIVAPI
    const xiv = new XIVAPI()

    // Create and set up the Express Server
    const server = express()
    server.use(bodyParser.json());

    server.use((req, res, next) => {
        // Expose the XIVAPI handle so Next.js can access it.
        req.xiv = xiv
        next()
    })

    // Use CORS
    server.use(cors())


    // this line tells the whole server to use the server routing in the API
    // and also gives the xivapi handle to the API
    server.use('/api', api(xiv))

    // routing point for monster detail pages
    server.get('/m/:id', (req, res) => {
        return app.render(req, res, '/monsters/mon', { id: req.params.id })
    })

    // entry point for Next.js server
    server.get('*', (req, res) => {
        return handle(req, res) 
    })

    // server waits for activity on the specified PORT
    server.listen(PORT)
    console.log(`Listening on http://localhost:${PORT}`)
}).catch(error => console.error(error.stack))