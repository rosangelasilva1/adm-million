//start_mongodb
// ~/mongodb/bin/mongod --dbpath ~/mongodb/db/


//mongo
//mongodb/bin/mongo

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/million', {useCreateIndex:true,useNewUrlParser: true,useFindAndModify:false,
 useUnifiedTopology: true});

module.exports = mongoose;


