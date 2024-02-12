const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameDbSchema = new Schema({
    coverImage: {
        type: String 
    },
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    frames: {
        type: Number,
        required: true,
        default: 1
    },
    charges: {
        type: Number,
        required: true,
        default: 0
    },
    tnc: {
        type: String,
        required: true,
    },
    slots: {
        type: [[Boolean]],
        required: true,
        default: Array(7).fill(Array(10).fill(false))
    }
}, {timestamps: true})

const GameDb = mongoose.model('game', gameDbSchema)

module.exports = GameDb