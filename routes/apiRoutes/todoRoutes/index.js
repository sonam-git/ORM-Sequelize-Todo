const router = require('express').Router();
const {createTodo, getTodos } = require('../../../controller/todoController.js');

router.get('/', getTodos)
router.post('/:userId', createTodo);

module.exports = router;
