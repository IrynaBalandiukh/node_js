const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

const apiRoutes = require('./routes/apiRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(apiRoutes);

app.listen(5200, () => {
    console.log('server has started on port 5200');
});