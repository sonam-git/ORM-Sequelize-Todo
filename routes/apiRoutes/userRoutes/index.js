const router = require('express').Router();
const {signUpUser,destroySession} = require('../../../controller/userController');

router.post('/signup', signUpUser) //create new users
router.post('/login', signUpUser) //create new users
router.post('/logout', destroySession); //destroy session

module.exports = router;