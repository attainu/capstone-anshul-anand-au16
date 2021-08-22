const mongoose = require('mongoose');

var mongoDBURL =
  'mongodb+srv://shrestha:shrestha@cluster0.6zmip.mongodb.net/mern-ecommerce';

mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var dbconnect = mongoose.connection;

dbconnect.on('error', () => {
  console.log(`MongoDB connection failed`);
});

dbconnect.on('connected', () => {
  console.log(`MongoDB connection successful`);
});

module.exports = mongoose;
