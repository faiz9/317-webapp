var express = require('express');
var router = express.Router();

/* GET home page. */
//localhost:3000/login
router.get('/', function(req, res, next) {
    res.render('index', { name: "Syed" });
});

/*
router.get('/login', function(req, res, next) {
    res.send('hello,login.html ')
})

router.get('/logout', function(req, res, next) {
    res.send('hello,logout.html ')
}) */

module.exports = router;