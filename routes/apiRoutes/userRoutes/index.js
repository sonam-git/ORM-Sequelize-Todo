const router = require('express').Router();
const {createUser,getAllUsers,getSingleUser} = require('../../../controller/userController');

router.get('/', getAllUsers)  //get single user by id
router.get('/:id', getSingleUser) //get all the users
router.post('/', createUser) //create new users

module.exports = router;