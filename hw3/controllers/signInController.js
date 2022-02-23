const users = require('../db/users');
let error = require('../errors/errors');

class signInController{

    renderSignIn (req,res) {
        res.render('signIn');
    }

    redirectOnUsers ({body}, res) {
        const user = users.find(user => user.email === body.email && user.password === body.password )

        if (!user) {
            error = 'wrong email or password';
            res.redirect('/error');
            return;
        }

        res.redirect(`/users/${user.id}`);
    }
}

module.exports = new signInController();