const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookingDbSchema = new Schema({
    gid: {
        type: String, 
        required: true
    },
    cid: {
        type: String, 
        required: true
    },
    gname: {
        type: String, 
        required: true
    },
    gameCoverPhoto: {
        type: String, 
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    numberOfPeople: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true,
        default: 1
    }
    
}, {timestamps: true})

const BookingDb = mongoose.model('booking', bookingDbSchema)

module.exports = BookingDb;