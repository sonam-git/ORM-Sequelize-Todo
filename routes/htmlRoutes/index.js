const router = require("express").Router();
// const withAuth = require("../../utils/auth");

const { getUser, getSingleUser,} = require('../../controller/userController');
const {loginDisplay } = require ('../../controller/loginController')
router.get('/users', getUser);
router.get('/users/:userId',getSingleUser);
router.get('/login',loginDisplay)

module.exports = router;
