const users = require('../db/users');
let error = require("../errors/errors");

class userController{
    filterUsers ({query}, res) {
        if (Object.keys(query).length) {
            let filteredArray = [...users];
            if (query.firstName) {
                filteredArray = filteredArray.filter(user => user.firstName === query.firstName)
            }

            if (query.lastName) {
                filteredArray = filteredArray.filter(user => user.lastName === query.lastName)
            }

            if (query.email) {
                filteredArray = filteredArray.filter(user => user.email === query.email)
            }

            if (query.password) {
                filteredArray = filteredArray.filter(user => user.password === query.password)
            }

            if (query.age) {
                filteredArray = filteredArray.filter(user => user.age === query.age)
            }

            if (query.city) {
                filteredArray = filteredArray.filter(user => user.city === query.city)
            }

            res.render('users', {users: filteredArray});
            return;
        }
        res.render('users', {users});
    }

    renderUsers ({params}, res) {
        const user = users.find(user => user.id === +params.userId);
        if (!user) {
            error = 'user with this id is not found';
            res.redirect('/error');
            return;
        }

        res.render('user', {user})
    }

    deleteUser ({params}, res) {
        users.splice(+params.userId-1, 1);
        res.redirect('/users');
    }
}
module.exports = new userController();