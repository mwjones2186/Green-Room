const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'mikejones',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
  },
  {
    username: 'marlowecrosland',
    email: 'rmebes1@sogou.com',
    password: 'password123',
  },
  {
    username: 'lorreinaGuyett',
    email: 'cstoneman2@last.fm',
    password: 'password123',
  },
  {
    username: 'jereamy',
    email: 'test@gmail.com',
    password: 'password',
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
