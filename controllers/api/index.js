const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const tagRoutes = require('./tag-routes');
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');

router.use('/category', categoryRoutes);
router.use('/tags', tagRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
