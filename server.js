const express = require('express');

const app = express();

var dbConnect = require('./db');

app.get('/', (req, res) => {
  res.send("This is for backend");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});