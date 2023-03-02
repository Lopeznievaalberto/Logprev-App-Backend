const express = require('express');
const router = express.Router();

const UsersControllers = require('../UserControllers');
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');

router.post("/getAll", isAdmin, UsersControllers.getAll);
router.post("/newUser", UsersControllers.newUser);
router.put("/updateUser", auth, UsersControllers.updateUser);
router.delete("/deleteUser", isAdmin, UsersControllers.deleteUser);
router.post("/login", UsersControllers.loginUser);


module.exports = router;


