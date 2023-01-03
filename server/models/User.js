const { model, default: mongoose } = require("mongoose");

let User = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String,required: true},
    country: {type: String,required: true},
    age: {type: Number,required: true},
    score: {type: Number,required: true},
    ranking: {type: Number,required: true}
});

module.exports = mongoose.model('User', User);  