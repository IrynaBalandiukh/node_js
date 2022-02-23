const users = require('../db/users');
let error = require('../errors/errors');

function isEmailExist (req, res, next) {
    try{
        const {firstName, lastName, email, password, age, city} = req.body;
        const user = users.find(user => user.email === email)
        if (!user) {
            throw new Error ('this email is not exist')
        }

        next();

    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = isEmailExist;