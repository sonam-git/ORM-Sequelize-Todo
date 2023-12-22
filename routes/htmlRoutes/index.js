const router = require("express").Router();
// const withAuth = require("../../utils/auth");

const { getUser, getSingleUser} = require('../../controller/userController')
router.get('/', getUser);
router.get('/:userId',getSingleUser);

module.exports = router;
