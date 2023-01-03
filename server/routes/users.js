var express = require('express');
var router = express.Router();
let User = require('../models/User');

// GET all users
router.get("/",  async(req, res) => {
	const users = await User.find({}, (err) => {
    if (!err) {
        res.send(users);
    }
    console.log(err);
    res.send("Some error occured!")
}).catch(err => console.log("Error occured, " + err));
});

// POST one user
router.post("/signup", async (req, res) => {
  // check if username already exists
  const newUser = new User({...req.body});
  const insertedUser = await newUser.save();
  return res.status(201).json(insertedUser);
});

  
router.get("/login",  async(req, res) => {
	const user = await User.findOne({username: req.body.username}, (err) => {
    if (!err) {
      if(user != null){
        if(user.password === req.body.password) {
          res.send(user); // Will use this info to display some user info 
        }
        else{
          res.send("Invalid username or password");
        }
      }
      else{
        res.send("Invalid username or password");
      }
    }
    console.log(err);
    res.send("Some error occured!")
}).catch(err => console.log("Error occured, " + err));
});

module.exports = router;
