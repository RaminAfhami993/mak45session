const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./user');
const generalTools = require('../tools/general-tools');




router.use('/auth', authRouter);
router.use('/user', generalTools.loginChecker, userRouter);

module.exports = router;