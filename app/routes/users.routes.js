
module.exports = (app) => {
    const users = require('../controllers/login.controller.js');
    const seatsData = require('../controllers/seatDetails.controller');

    // Create a new Note
   //app.post('/login', users.login);

    // Retrieve login Details
    app.get('/seat-data', seatsData.getSeatDetals);
    app.post('/login', users.login);

    // Retrieve a single Note with noteId
   // app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
   // app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    //app.delete('/notes/:noteId', notes.delete);
}