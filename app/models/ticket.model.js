const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
    _id: String,
    pessangerName:String,
    timeSlot: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Ticket', TicketSchema);