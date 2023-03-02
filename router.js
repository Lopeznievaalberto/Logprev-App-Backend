
const router = require('express').Router();

const usersRouter = require('./users/UserViews');
const testsRouter = require('./tests/TestViews');

router.use('/users', usersRouter);
router.use('/tests', testsRouter)

module.exports = router