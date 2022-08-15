const seedCategories = require('./category-seeds');
// const seedHobbies = require('./hobby-seeds');
const sequelize = require('../config/connection');
const seedComments = require('./comment-seeds');
const seedUsers = require('./user-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
/*
  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');
*/
  process.exit(0);
};

seedAll();
