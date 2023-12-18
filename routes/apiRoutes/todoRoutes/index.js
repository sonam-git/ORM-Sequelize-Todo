const router = require('express').Router();
const {createTodo, getTodos } = require('../../../controller/todoController.js');

router.get('/', getTodos)
router.post('/', createTodo);

module.exports = router;
