const mongoose = require('mongoose');

//Basic DB Config
const config =  { 
  dbName: 'FindMyBand' //creates this DB in mongoDB + Compass
};

//Connecting Mongoose to our DB
mongoose.connect(`mongodb://localhost:27017/${config.dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;