const router = require('express').Router();
const apiRoutes = require('./apiRoutes')
const htmlRoutes = require('./htmlRoutes')

router.use('/api', apiRoutes);
router.use('/users', htmlRoutes)


module.exports = router;