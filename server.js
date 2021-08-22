const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var dbconnection = require('./db');
var productsRoute = require('./routes/productsRoute');
app.use(bodyParser.json());
app.use('/api/products/', productsRoute);

app.get('/', (req, res) => {
  res.send('This is from backend');
});

const port = 5000;
app.listen(port, () => console.log(`NodeJs Server started`));
