require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('static'));
app.set('view engine', 'pug');

app.use("/", require("./routes/index.js"));
app.use("/gif", require("./routes/random-gif.js"));


app.listen('3001', () => {
  console.log('port3001-----------------------------------------------------------------------');
});
