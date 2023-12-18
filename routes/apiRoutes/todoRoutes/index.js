const router = require('express').Router();
const {createTodo, getTodos } = require('../../../controller/todoController.js');

router.get('/', getTodos) //get all todos
router.post('/:userId', createTodo); //create newtodo with specific userId

module.exports = router;
