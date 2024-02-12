const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userDbSchema = new Schema({
    contactNo: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    role: {
        type: String, 
        required: true
    }
}, {timestamps: true})

const UserDb = mongoose.model('user', userDbSchema)

module.exports = UserDb;