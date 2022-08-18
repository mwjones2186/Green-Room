const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const categoryRoutes = require('./category-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
