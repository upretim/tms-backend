const mongoose = require('mongoose');

const SeatSchema = mongoose.Schema({
    available:Number,
    filled: Number,
    total: Number,
    timeslot:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Seat', SeatSchema);