const sequelize = require('../config/database');
const User = require('../models/User');
// const Perfume = require('../models/Perfume');

sequelize.sync().then(async () => {
  try {
    await User.create({ username: 'admin', password: 'admin' });
    
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    sequelize.close();
  }
});

