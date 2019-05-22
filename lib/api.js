'use strict'

const Monster = require('./monModel')
const Mongoose = require('mongoose')
const express = require('express')

// All of the functions here use Async. Don't worry about it -
// just helps things run smoothly.

module.exports = db => {
    // enable the Express Router
    const router = express.Router()

    // Magic Method that catches errors
    const wrapAsync = handler => (req, res) => handler(req)
        .then(result => res.json(result))
        .catch(error => res.status(500).json({ error: error.message }))

    // When the router detects a GET request for /monsters, it reads the database
    router.get('/', wrapAsync(async function(req) {
        return db.collection('Monsters').find().sort({ createdAt: -1 }).toArray()
    }))

    // When the router detects a POST request for /monsters, it adds a new entry
    router.post('/', wrapAsync(async function(req) {
        const mon = new Monster(req.body)
        await db.collection('Monsters').insertOne(mon)
        return { mon }
    }))

    // When the router detects a DELETE request, it reads the ID and deletes the entry at that point
    router.delete('/:id', wrapAsync(async function(req) {
        const { result } = await db.collection('Monsters').deleteOne({
            _id: Mongoose.Types.ObjectId(req.params.id)
        })
        return { result }
    }))

    return router
}