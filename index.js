'use strict';

//requires from the model/index.js
const {sequelizeDatabase} = require('./src/models');
const { start } = require('./src/server');

//create all associated tables and make sure connection good
sequelizeDatabase.sync()
  .then(() => {
    console.log('successfull connection');
  })
  .catch(err=>console.log(err));

start();
