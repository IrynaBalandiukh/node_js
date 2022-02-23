const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

const users = [];
let error = '';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/users', ({query}, res) => {
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
});

app.get('/users/:userId', ({params}, res) => {
    const user = users.find(user => user.id === +params.userId);
    if (!user) {
        error = 'user with this id is not found';
        res.redirect('/error');
        return;
    }

    res.render('user', {user})
});


app.get('/error', (req, res) => {
    res.render('error', {error})
});

app.post('/login', ({body}, res) => {
    const userExist = users.some(user => user.email === body.email);
    if (userExist) {
        error = 'user with this email exist';
        res.redirect('/error');
        return;
    }

    users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
    res.redirect('/users');
});

app.use((req, res) => {
    res.render('notFound');
});

app.listen(5200, () => {
    console.log('server has started on port 5200');
});