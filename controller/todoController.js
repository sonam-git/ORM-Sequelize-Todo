const {Todo, User} = require('../model');


const createTodo = async (req, res) => {
try {
   // Extract user ID from the request parameters
   const userId = req.params.userId;
   
    // Check if the user with the provided ID exists
    const user = await User.findByPk(userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    const newTodo = await Todo.create({ ...req.body, user_id: userId });
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