var express = require('express');
var router = express.Router();

/* GET home page. */
//localhost:3000/login
router.get('/', function(req, res, next) {
    res.render('index', { name: 'Syed' });
});

router.get('/login', (req, res, next) => {
    res.render("login");
});

router.get('/registration', (req, res, next) => {
    res.render("registration");
});

router.get('/postimage', (req, res, next) => {
    res.render("postimage");
});

router.get('/ImagePost', (req, res, next) => {
    res.render("ImagePost");
});

module.exports = router;