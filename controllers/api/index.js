const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');

const commentRoutes = require('./comment-routes')


router.use('/category', categoryRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

router.use('/comment', commentRoutes)


module.exports = router;
