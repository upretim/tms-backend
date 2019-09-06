// Retrieve and return all notes from the database.
const Seat = require('../models/seat.model');
exports.getSeatDetals = (req, res) => {
    const seatDetails = Seat.find()
    .then(seatDetails=>{
        if( seatDetails == null || seatDetails.length===0){
            res.status(404).json({
                     resp: "No data found for user"
                 })
        }
        else{
            res.status(200).json({seatDetails:seatDetails});
        }
    })
    .catch(error=>{
        res.status(404).json({
            resp: `Internal server error ${error}`
        })
    })
};