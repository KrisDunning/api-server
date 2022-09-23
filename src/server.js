'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
//const logger = require('./middleware/logger');
//const validator = require('./middleware/validator');
const foodRouter= require('./routes/food');


const PORT = process.env.PORT || 3002;

// design principle:  singleton
const app = express();
app.use(express.json());
app.use(foodRouter);
//app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});



app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start};
