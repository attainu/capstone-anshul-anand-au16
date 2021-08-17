const mongoose = require('mongoose');

var mongoDBURL = 'mongodb+srv://anshul_shresth:anshul_shresth12@e-mart.9rvjp.mongodb.net/e-mart_data';

mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var dbConnect = mongoose.connection

dbConnect.on('error', () => {
  console.log(`Mongo DB connection failed`)
})

dbConnect.on('connected', () => {
  console.log(`Mongo DB connection successful `);
})

module.exports = mongoose