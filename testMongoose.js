const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');


var Puffers = require('./models/puffer.js').Puffers



var puffers = new Puffers({
   title: "Puffer Jordan",
   nick: "jordan",

})




puffers.save();