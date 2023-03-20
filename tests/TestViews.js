const express = require('express');
const router = express.Router();

const TestsControllers = require('../tests/TestControllers');
//const auth = require('../middlewares/auth');
//const isAdmin = require('../middlewares/isAdmin');

//router.post("/getAll", isAdmin, UsersControllers.getAll);
router.get("/getAllTests", TestsControllers.getAllTests);
router.post("/newTest", TestsControllers.newTest);
router.put("/updateTest",  TestsControllers.updateTest);
router.delete("/deleteTest",  TestsControllers.deleteTest);




module.exports = router;