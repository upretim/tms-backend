const Ticket = require('../models/ticket.model.js');
exports.getTicketData = (req, res) => {
    const ticketData = Ticket.find()
    .then(ticketData=>{
        if( ticketData == null || ticketData.length===0){
            res.status(404).json({
                     resp: "No data found for tickets"
                 })
        }
        else{
            res.status(200).json({ticketData});
        }
    })
    .catch(error=>{
        res.status(404).json({
            resp: `Internal server error ${error}`
        })
    })
};

/*exports.addTicket = (req, res) => {
    const ticketData = Ticket.find()
    .then(seatDetails=>{
        if( ticketData == null || ticketData.length===0){
            res.status(404).json({
                     resp: "No data found for tickets"
                 })
        }
        else{
            res.status(200).json({ticketData:ticketData});
        }
    })
    .catch(error=>{
        res.status(404).json({
            resp: `Internal server error ${error}`
        })
    })
}; */