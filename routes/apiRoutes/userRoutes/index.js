const router = require('express').Router();
const {createUser,destroySession} = require('../../../controller/userController');

// router.get('/', getAllUsers)  //get single user by id
// router.get('/:id', getSingleUser) //get all the users
router.post('/signup', createUser) //create new users
router.post('/logout', destroySession);
// router.delete('/:id', deleteUser) //delete user by its id

module.exports = router;