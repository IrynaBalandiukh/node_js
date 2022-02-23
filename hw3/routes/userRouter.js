const {Router} = require('express');
let users = require('../db/users');
let error = require('../errors/errors');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/', userController.filterUsers);

userRouter.get('/:userId', userController.renderUsers);

userRouter.post('/:userId', userController.deleteUser);

module.exports = userRouter;