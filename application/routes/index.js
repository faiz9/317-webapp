var express = require('express');
var router = express.Router();
var IsLoggedIn = require('../middleware/routeprotectors').userIsLoggedIn;

/* GET home page. */
//localhost:3000/login


router.get('/', function(req, res, next) {
    res.render('homepage', { title: 'Home Page' });
});

router.get('/login', (req, res, next) => {
    res.render("login", { title: 'Log In' });
});

router.get('/registration', (req, res, next) => {
    res.render("registration", { title: 'Register' });
});

//router.use('/postimage', isLoggedIn); //gives me error also:
router.get('/postimage', (req, res, next) => {
    res.render("postimage", { title: 'Post an Image' });
});

/*
router.get('/ImagePost', (req, res, next) => {
    res.render("ImagePost", { title: 'Post' });
}); */

module.exports = router;