const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const hobbyRoutes = require('./hobby-routes');
const tagRoutes = require('./tag-routes');
const postRoutes = require('./post-routes');

router.use('/categories', categoryRoutes);
router.use('/hobbies', hobbyRoutes);
router.use('/tags', tagRoutes);
router.use('/posts', postRoutes);

module.exports = router;
