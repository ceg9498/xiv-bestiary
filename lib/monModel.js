'use strict'

const Archetype = require('archetype-js')

module.exports = new Archetype({
    createdAt: {
        $type: Date,
        $default: new Date()
    },
    webname: {
        $type: 'string',
        $required: true
    },
    name: {
        $type: 'string',
        $required: true
    },
    type: {
        $type: 'string',
        $required: true
    },
    aggro: {
        $type: 'boolean',
        $required: false
    },
    rarity: {
        $type: 'string',
        $required: false
    },
    hp: {
        $type: 'string',
        $required: false
    }

}).compile('monModel')