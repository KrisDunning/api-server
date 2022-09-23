'use strict';

module.exports = (sequelizeDatabase, DataTypes) =>{
  return sequelizeDatabase.define('food',{
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    color:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    foodgroup: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
