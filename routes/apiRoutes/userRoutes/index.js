const router = require('express').Router();
const {createUser} = require('../../../controller/userController')
router.post('/', createUser)

module.exports = router;