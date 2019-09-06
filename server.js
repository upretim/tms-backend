//refrence tutorial url https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
//app.use(cors())
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  }
app.use(cors());

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});


// listen for requests
require('./app/routes/users.routes.js')(app)
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    dbName: "tmsDatabase"
}).then(() => {
    console.log("Successfully connected to the database");  

}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});