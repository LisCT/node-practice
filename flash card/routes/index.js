const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    const name = req.cookies.username;

    // passing name from the cookies to avoid repeat it again
    name ? res.render('index', { name }) : res.redirect('/hello');

});

router.get('/hello', (req, res) => {

    const name = req.cookies.username;

    name ? res.redirect('/') : res.render('hello');

});

router.post('/hello', (req, res) => {

    res.cookie('username', req.body.username); // save it in the cookies (set)
    res.redirect('/');

});

router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

module.exports = router;


