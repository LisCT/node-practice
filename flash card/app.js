const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false})); // to be able to access to the body response
app.use(cookieParser()); // to be able to access to the cookies

app.set('view engine', 'pug');

const mainRoutes = require('./routes/index');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {

    const err = new Error('Not Found');
    err.status = 404;
    next(err);

});

app.use((err, req, res, next) => {

    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);

});

app.listen(3000, () => {

    console.log("The application is runing on localhost:3000");
    
});

