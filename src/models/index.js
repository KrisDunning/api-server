'use strict'

const {Sequelize, DataTypes}= require('sequelize');

const foodSchema = require('./food.schema');


//if using .env file
//'postgres://localhost:5432/api-app'
//if using password on db
//'postres://username:password@localhost:5432/api-app'

//ternary: what(condition)?return if true : return if false;
const DATABASE_URL=process.env.NODE_ENV==='test'
  ? 'sqlite:memory'
  :'postgres://localhost:5432/api-app';

//instantiates DB
const sequelizeDatabase= new Sequelize(DATABASE_URL);


//create food model with our schema
const FoodModel = foodSchema(sequelizeDatabase, DataTypes);



module.exports = {sequelizeDatabase, FoodModel};
