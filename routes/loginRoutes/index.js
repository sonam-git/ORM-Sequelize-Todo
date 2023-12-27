const router = require('express').Router();
const { loginDisplay } = require ('../../controller/loginController')

router.get('/',loginDisplay)
module.exports = router;