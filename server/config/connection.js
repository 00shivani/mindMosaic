require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mindMosaic');

const db = mongoose.connection;

// Move the event listeners here
db.on('error', console.error.bind(console, 'mongodb connection error:'));
db.once('open', function () {
  console.log('connected to the database!');
});

module.exports = db;
