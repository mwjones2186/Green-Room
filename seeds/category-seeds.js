const { Category } = require('../models');

const categorydata = [
  {
    category_name: 'Outdoors',
  },
  {
      category_name: 'Computers'
  },
  {
    category_name: 'Pets',
  },
  {
      category_name: 'Fiber Arts'
  }
];

const seedCategories = () => Category.bulkCreate(categorydata);

module.exports = seedCategories;
