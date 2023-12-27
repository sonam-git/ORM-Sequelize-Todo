const router = require("express").Router();
// const withAuth = require("../../utils/auth");
const { getUser, getSingleUser,displaySignup } = require("../../controller/userController");
const { loginDisplay } = require ('../../controller/loginController')

router.get("/" , displaySignup);
router.get("/login",loginDisplay);
router.get("/users", getUser);
router.get("/users/:userId", getSingleUser);


module.exports = router;
