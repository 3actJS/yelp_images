// helper files
const database = require('../database/index.js')

// middleware
const parser = require('body-parser');

// import controller
const {getImages} = require('./controller.js');

const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser());

app.get('/images', getImages);

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

