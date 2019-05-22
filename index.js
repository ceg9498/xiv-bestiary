'use strict'

const mongoose = require('mongoose')
const api = require('./lib/api')
const bodyParser = require('body-parser')
const co = require('co')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_DEV !== 'production' // true false
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler() // part of next config

const myLogin = require('./login.js')
const dbRoute = 'mongodb://' + myLogin.login + 'ds121382.mlab.com:21382/ffxiv-bestiary'
const PORT = process.env.PORT || 3000

// Don't worry about co for now! It does magic that makes things cleaner and smoother.
// Instead pay attention to the things it's wrapped around.
co(function * () {
    yield nextApp.prepare()

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
    const app = express()
    app.use(bodyParser.json());

    app.use((req, res, next) => {
    // Expose the MongoDB database handle so Next.js can access it.
        req.db = db
        next()
    })
    // this line tells the whole app to use the server routing in the API, and also gives the db to the API
    app.use('/api', api(db))

    // entry point for Next.js app
    app.get('*', (req, res) => {
        return handle(req, res) 
    })

    // server waits for activity on the specified PORT
    app.listen(PORT)
    console.log(`Listening on http://localhost:${PORT}`)
}).catch(error => console.error(error.stack))