const router = require("express").Router();

const { getUser, getSingleUser} = require('../../controller/userController')
router.get('/',getUser);
router.get('/:userId',getSingleUser);

module.exports = router;
