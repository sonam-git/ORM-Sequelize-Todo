const { User, Todo } = require("../models");
// create user => /api/users/signup
const signUpUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    //save data into req.session object
    req.session.save(() => {
      req.session.user = newUser.get({ plain: true });
      // res.redirect('/login')
      // res.json(newUser);
    });
    res.redirect('/login')
  } catch (err) {
    res.status(500).json({ err });
  }
};

// login user => /api/users/login
const loginUser = async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.loginUsername },
    });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.loginPassword);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.user = {
        id: userData.id,
        username: userData.username,
      };
      req.session.loggedIn = true;
      
      // console.log("user", userData);
    

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

// get all users =>  /users
const getUser = async (req, res) => {
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
    res.render("users", {
      users,
      loggedInUser: req.session.user || null,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// get single users => /users/userId
const getSingleUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const singleUser = await User.findByPk(userId, {
      include: [
        {
          model: Todo, //display the model Todo belongs to th user
          attributes: ["id", "todo"], //display only todo text
        },
      ],
    });

    const user = singleUser.get({ plain: true });
    res.render("singleUser", {
      user,
      loggedInUser: req.session.user || null,
    });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const destroySession = (req, res) => {
  req.session.destroy(() => {
    res.json({ sucess: true });
  });
};

module.exports = {
  signUpUser,
  loginUser,
  getUser,
  getSingleUser,
  destroySession,
};
