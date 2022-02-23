const {Router} = require('express');
const users = require('../db/users');
let error = require('../errors/errors');

const errorRouter = Router();

errorRouter.get('/', (req, res) => {
    res.render('error', {error});
});

module.exports = errorRouter;