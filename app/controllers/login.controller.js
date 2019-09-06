// Retrieve and return all notes from the database.
const User = require('../models/user.model.js');

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

exports.login = (req, res) => {
    const usersList = User.findOne({ 
        username: req.body.username,
        password:  req.body.password
    })
    .then(usersList=>{
        if( usersList == null || usersList.length===0){
            res.status(404).json({
                     resp: "No data found for user"
                 })
        }
        else{
            res.status(200).json({userType:usersList.userType});
        }
    })
    .catch(error=>{
        res.status(404).json({
            resp: `Internal server error ${error}`
        })
    })
};