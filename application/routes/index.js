var express = require('express');
var router = express.Router();

/* GET home page. */
//localhost:3000/login
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Syeds App' });
});

router.get('/login', (req, res, next) => {
    res.render("login", { title: 'Log In' });
});

router.get('/registration', (req, res, next) => {
    res.render("registration", { title: 'Register' });
});

router.get('/postimage', (req, res, next) => {
    res.render("postimage", { title: 'Create a Post' });
});

router.get('/ImagePost', (req, res, next) => {
    res.render("ImagePost", { title: 'Post' });
});

module.exports = router;