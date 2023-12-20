const { User, Todo } = require("../models");
// create user
const createUser = async (req, res) => {
  try {
    const newUser = (await User.create(req.body));
    //save data into req.session object
    req.session.save(()=>{
      req.session.user = newUser.get({ plain: true });
      res.json(newUser);
    }) 
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getUser =  async (req, res) => {
  try {
    const userData = await User.findAll();
    // {
    //   include: [
    //     {
    //       model: Todo, //display the model Todo belongs to th user
    //       attributes: ["todo"], //display only todo text
    //     },
    //   ],
    // }
    const users = userData.map((user) => user.get({ plain: true }));
    res.render("users", 
    { 
    users,
    loggedInUser: req.session.user || null,
     }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

// get single users
const getSingleUser =  async (req, res) => {
    const userId = req.params.id
    try {
      const singleUser = await User.findByPk(userId,{
        include: [
          {
            model: Todo, //display the model Todo belongs to th user
            attributes: ["todo"], //display only todo text
          },
        ],
      } );
      const user = singleUser.get({ plain : true })
      if(!singleUser){
        res.status(404).json({message: 'No user with this id'});
        return;
      }
      res.render("singleUser", { user });
    //   console.log(user)

    } catch (err) {
      res.status(500).json({err})
    }
    };

    const destroySession = (req,res) => {
      req.session.destroy(()=> {
        res.json({sucess: true})
      })
    }
// // get all the users
// const getAllUsers = async (req, res) => {
//   try {
//     const allUser = await User.findAll({
//       include: [
//         {
//           model:Todo, //display the model Todo belongs to th user
//           attributes: ['todo'], //display only todo text
//         }],
//     });
//     res.json(allUser);
//   } catch (err) {
//     res.status(500).json({ err });
//   }
// };

// // get single users
// const getSingleUser = async (req, res) => {
// try {
//   const user = await User.findByPk(req.params.id, {include: [{model: Todo, attributes:['todo'] }]});
//   if(!user){
//     res.status(404).json({message: 'No user with this id'});
//     return;
//   }
//   res.json(user);
// } catch (err) {
//   res.status(500).json({err})
// }
// };

// // delete users
// const deleteUser = async (req, res) => {
//   try {
//     const deletedUser = await User.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!deletedUser) {
//       res.status(404).json({ message: 'No user with this id' });
//       return;
//     }

//     res.json({ message: 'User deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ err });
//   }
// };
module.exports = { createUser, getUser, getSingleUser, destroySession };
// getAllUsers, getSingleUser,deleteUser
