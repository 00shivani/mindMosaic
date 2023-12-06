const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/');


Db.on('error', console.error.bind(console, 'mongodb connection error:'));
Db.once('open', function() {
  console.log("connected to the database!")
});

module.exports = mongoose.connection;
