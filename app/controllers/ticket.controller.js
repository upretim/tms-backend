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

exports.addTicket = (req, res) => {
    console.log('request body ', req.body)
    let newTicket = new Ticket();
    let errorMsg = null;
    if((req.body.pessangerName=="" || req.body.pessangerName== undefined)&& ((req.body.timeSlot=="" || req.body.timeSlot== undefined))){
        errorMsg = "Please enter Pessanger name and select time slot";
    }
    else if(req.body.pessangerName=="" || req.body.pessangerName== undefined){
        errorMsg = "Please enter Pessanger name"
    }
    else if(req.body.timeSlot=="" || req.body.timeSlot== undefined){
        errorMsg = "Please enter a time slot";
    }
    
   if (errorMsg) {
        console.log(errorMsg)
        res.status(404).json({
            resp: errorMsg
        })
        return;
    }

    newTicket._id = req.body._id;
    newTicket.pessangerName = req.body.pessangerName;
    newTicket.timeSlot = req.body.timeSlot;
    
    newTicket.save((error, ticket)=>{
        if(error){
            console.log('Error in saving ticket', error);
        }
        else{
            console.log('ticket details ', ticket);
            res.send(ticket);
        }
    })


    /*const ticketData = Ticket.find()
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
    })*/
}; 