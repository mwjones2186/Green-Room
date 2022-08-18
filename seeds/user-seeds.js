const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'mikejones',
    email: 'mwjones2186@gmail.com',
    password: 'Password123*',
    zipcode: '97504'
  },
  {
    username: 'marlowecrosland',
    email: 'rmebes1@sogou.com',
    password: 'password123',
    zipcode: '97210'
  },
  {
    username: 'lorreinaGuyett',
    email: 'cstoneman2@last.fm',
    password: 'password123',
    zipcode: '97405'
  },
  {
    username: 'jereamy',
    email: 'test@gmail.com',
    password: 'password',
    zipcode: '83814'
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
