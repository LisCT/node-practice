const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

// use runs everytime middleware
app.use((req, res, next) => {
    req.message = 'this message made it!';
    next();
});

app.use((req, res, next) => {
    console.log(req.message);
    next();
})

app.get('/', (req, res) => {

    const name = req.cookies.username;

    // passing name from the cookies to avoid repeat it again
    name ? res.render('index', { name }) : res.redirect('/hello');

});

app.get('/cards', (req, res) => {

    res.render('card', { 
        prompt: "who is buried in Grant's tomb?", hint: "Think about whose tomb it is."});

});

app.get('/hello', (req, res) => {

    const name = req.cookies.username;

    name ? res.redirect('/') : res.render('hello');

});

app.post('/hello', (req, res) => {

    res.cookie('username', req.body.username); // save it in the cookies (set)
    res.redirect('/');

});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

app.listen(3000, () => {

    console.log("The application is runing on localhost:3000");
    
});

