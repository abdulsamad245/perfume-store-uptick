const sequelize = require('../config/database');
const User = require('../models/User');
require('dotenv').config();
console.log({ username: process.env.DB_USER, password: process.env.DB_PASSWORD});
// const Perfume = require('../models/Perfume');

sequelize.sync().then(async () => {
  try {
    await User.create({ username: process.env.DB_USER, password: process.env.DB_USER});
    
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    sequelize.close();
  }
});

