const express = require('express');
const bodyParser = require('body-parser');
const catRoute = require('./catRoute');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/cat', catRoute);

app.listen(7000, () => {
  console.log('Server listing on port 7000');
});
