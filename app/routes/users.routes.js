
module.exports = (app) => {
    const users = require('../controllers/login.controller.js');
    const seatsData = require('../controllers/seatDetails.controller.js');
    const TicketData = require('../controllers/ticket.controller.js');

    // Create a new Note
   //app.post('/login', users.login);

    // Retrieve login Details
    app.post('/login', users.login);

    //retrive Seat Data
    app.get('/seat-data', seatsData.getSeatDetals);

    //Retrieve ticket information
    app.get('/ticket-data', TicketData.getTicketData);
   

    // Update a Note with noteId
   // app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    //app.delete('/notes/:noteId', notes.delete);
}