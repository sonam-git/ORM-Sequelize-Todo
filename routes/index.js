const router = require('express').Router();
const apiRoutes = require('./apiRoutes')
const htmlRoutes = require('./htmlRoutes')
const loginRoutes = require('./loginRoutes')

router.use('/api', apiRoutes);
router.use('/users', htmlRoutes)
router.use ('/login', loginRoutes)


module.exports = router;