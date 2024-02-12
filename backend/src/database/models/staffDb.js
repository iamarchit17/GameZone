const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffDbSchema = new Schema({
    uid: {
        type: String, 
        required: true
    },
    profilePhoto: {
        type: String 
    },
    name: {
        type: String, 
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    DOB: {
        type: String, 
        required: false
    },
    gender: {
        type: String, 
        required: false
    },
    isActive: {
        type: Boolean,
        required: true,
        default: false
    }
}, {timestamps: true})

const StaffDb = mongoose.model('staff', staffDbSchema)

module.exports = StaffDb