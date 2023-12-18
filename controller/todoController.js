const {Todo} = require('../model');

const createTodo = async (req, res) => {
   
try {
    const newTodo = await Todo.create(req.body);
    res.json(newTodo)
} catch( err){
    res.status(500).json({err});
    console.log(err)
}
};
 
const getTodos = async (req, res) => {
    try {
        const allTodo = await Todo.findAll();
        res.json(allTodo)
    } catch (error) {
        res.status(500).json({error})
    }
};

module.exports = { createTodo, getTodos}