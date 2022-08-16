const Post = require('./Post');
const User = require('./User');

const Comment = require('./comment');
const Category = require('./category');


User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Category.hasMany(Post, {
  foreignKey:'category_id',
  onDelete:'CASCADE'
});

Post.belongsTo(Category, {
  foreignKey:'category_id',
  onDelete:'CASCADE'
})

module.exports = { User, Post, Comment, Category };
