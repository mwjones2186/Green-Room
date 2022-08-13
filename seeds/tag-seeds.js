const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Needleworks',
  },
  {
    tag_name: 'music',
  },
  {
    tag_name: 'biking',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;