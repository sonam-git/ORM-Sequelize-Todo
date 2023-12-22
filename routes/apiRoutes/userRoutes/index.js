const router = require('express').Router();
const {destroySession, signUpUser, loginUser} = require('../../../controller/userController');


router.post('/signup', signUpUser) //create new users
router.post('/login', loginUser) //create new users
router.post('/logout', destroySession); //destroy session

module.exports = router;