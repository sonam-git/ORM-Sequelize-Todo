const router = require("express").Router();
const { getUser, getSingleUser} = require('../../controller/userController')
router.get('/',getUser);
router.get('/:id',getSingleUser);


module.exports = router;
