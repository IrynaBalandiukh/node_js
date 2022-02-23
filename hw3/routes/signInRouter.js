const {Router} = require('express');
const users = require('../db/users');
let error = require('../errors/errors');
const signInController = require('../controllers/signInController');
const isEmailExist = require('../middleware/isEmailExist');

const signInRouter = Router();

signInRouter.get('/', signInController.renderSignIn);

signInRouter.post('/', isEmailExist, signInController.redirectOnUsers);

module.exports = signInRouter;