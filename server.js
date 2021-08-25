const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var dbConnect = require('./db');
var productsRoute = require('./routes/productsRoute');
app.use(bodyParser.json());
const path = require('path');
app.use('/api/products/', productsRoute);

app.get('/', (req, res) => {
  res.send('This is for backend');
});

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
