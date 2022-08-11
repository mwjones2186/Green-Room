const seedCategories = require('./category-seeds');
const seedHobbies = require('./hobby-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedHobbies();
  console.log('\n----- HOBBIES SEEDED -----\n');

  process.exit(0);
};

seedAll();
