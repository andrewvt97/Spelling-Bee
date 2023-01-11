var express = require('express');
var router = express.Router();
let User = require('../models/User');

// GET all users
router.get("/",  (req, res) => {
	User.find({}).then((users) => {
    res.send(users);
    
}).catch(err => console.log("Error occured, " + err));
});

// POST one user
router.post("/signup", (req, res) => {
  // check if username already exists
  const newUser = new User({...req.body});
  newUser.save().then((insertedUser) =>
  res.status(201).json(insertedUser));
});

  
router.get("/login",  (req, res) => {
	User.findOne({username: req.body.username}).then((user) => 
  {
    if(user.password == req.body.password) {
      res.send(user); // Will use this info to display some user info 
    }
    else{
      res.status(404).json({
        status: "Invalid username or password"
      });
    }
  }).catch(err => console.log("Error occured, " + err));
});

module.exports = router;
