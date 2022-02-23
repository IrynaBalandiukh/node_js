const users = require('../db/users');
let error = require("../errors/errors");

class loginController {
    renderLogin (req, res) {
        res.render('login');
    }

    addNewUser ({body}, res) {
        const userExist = users.some(user => user.email === body.email);
        if (userExist) {
            error = 'user with this email exist';
            res.redirect('/error');
            return;
        }

        users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
        res.redirect('/users');
    }
}

module.exports = new loginController();