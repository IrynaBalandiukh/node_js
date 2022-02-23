const {Router} = require('express');

const loginController = require('../controllers/loginController');
const isUserValid = require('../middleware/isUserValid');

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);

loginRouter.post('/', isUserValid, loginController.addNewUser);

module.exports = loginRouter;