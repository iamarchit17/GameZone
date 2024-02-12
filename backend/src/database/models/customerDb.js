const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BookingDb = require('../database/models/bookingDb');

const customerDbSchema = new Schema({
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
    myBookings: {
        type: Array,
        required: false,
        default: undefined
    },
    // myBook : [{
    //     type : BookingDb,
    //     required : true,
    //     default : undefined
    // }],
    amount: {
        type: Number,
        required: true,
        default: 0
    }
}, {timestamps: true})

const CustomerDb = mongoose.model('customer', customerDbSchema)

module.exports = CustomerDb