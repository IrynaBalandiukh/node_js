const {Router} = require('express');

const signInController = require('../controllers/signInController');
const isEmailExist = require('../middleware/isEmailExist');

const signInRouter = Router();

signInRouter.get('/', signInController.renderSignIn);

signInRouter.post('/', isEmailExist, signInController.redirectOnUsers);

module.exports = signInRouter;