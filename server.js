'use strict'

const mongoose = require('mongoose')
const api = require('./lib/api')
const bodyParser = require('body-parser')
const co = require('co')
const cors = require('cors')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_DEV !== 'production' // true false
const app = next({ dev })
const handle = app.getRequestHandler() // part of next config

const myLogin = require('./login.js')
const dbRoute = 'mongodb://' + myLogin.login + 'ds121382.mlab.com:21382/ffxiv-bestiary'
const PORT = process.env.PORT || 3000

// Don't worry about co for now! It does magic that makes things cleaner and smoother.
// Instead pay attention to the things it's wrservered around.
co(function * () {
    yield app.prepare()

    console.log(`Connecting to db...`)

    // connects our back end code with the database
    mongoose.connect(
        dbRoute,
        { 
            useFindAndModify: false,
            useNewUrlParser: true
        }
    );
    const db = mongoose.connection; // db variable now references the connection to MongoDB
    db.once("open", () => console.log("Connected to the database!"));
    // check if connection with the database is successful
    db.on("error", console.error.bind(console, "MongoDB connection error:"));

    // Create and set up the Express Server
    const server = express()
    server.use(bodyParser.json());

    server.use((req, res, next) => {
    // Expose the MongoDB database handle so Next.js can access it.
        req.db = db
        next()
    })

    // Use CORS
    server.use(cors())

    // this line tells the whole server to use the server routing in the API, and also gives the db to the API
    server.use('/api', api(db))

    // routing point for monster detail pages
    server.get('/m/:webname', (req, res) => {
        // server.use('/api', api(req.params.webname))
        return app.render(req, res, '/monsters/mon', { webname: req.params.webname })
    })

    // entry point for Next.js server
    server.get('*', (req, res) => {
        return handle(req, res) 
    })

    // server waits for activity on the specified PORT
    server.listen(PORT)
    console.log(`Listening on http://localhost:${PORT}`)
}).catch(error => console.error(error.stack))