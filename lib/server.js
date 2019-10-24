'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const app = express();
const categories = require('../routes/categories-router');

// Cross origin resource sharing
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`Server up on ${port}`))
  }
}

// app.use('/api', router);
app.use('/api', categories);
// app.listen(3000, () => console.log('Here I am'))