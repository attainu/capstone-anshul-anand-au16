const express = require('express');

const app = express();

var dbConnect = require('./db');
var productsRoute = require('./routes/productsRoute')

app.use('/api/products/', productsRoute)

app.get('/', (req, res) => {
  res.send("This is for backend");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});