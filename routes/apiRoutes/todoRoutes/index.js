const router = require('express').Router();
const {createTodo, getTodos,deleteTodo,updateTodo } = require('../../../controller/todoController.js');

router.get('/', getTodos) //get all todos
router.post('/:userId', createTodo); //create newtodo with specific userId
router.delete('/:todoId', deleteTodo); // Delete a todo with specific todoId
router.put('/:todoId', updateTodo); // Update a todo with specific todoId

module.exports = router;
