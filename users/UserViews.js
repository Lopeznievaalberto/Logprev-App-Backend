const express = require('express');
const router = express.Router();

const UsersControllers = require('../users/UserControllers');
//const auth = require('../middlewares/auth');
//const isAdmin = require('../middlewares/isAdmin');

//router.post("/getAll", isAdmin, UsersControllers.getAll);
router.get("/getAll", UsersControllers.getAllUsers);
router.post("/newUser", UsersControllers.newUser);
router.put("/updateUser",  UsersControllers.updateUser);
router.delete("/deleteUser",  UsersControllers.deleteUser);
router.post("/login", UsersControllers.loginUser);


module.exports = router;


