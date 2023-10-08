const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Perfume = sequelize.define('Perfume', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2), 
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT, 
    allowNull: false,
  },
  
});

module.exports = Perfume;
