var express = require('express');
var router = express.Router();

/* GET home page. */
//localhost:3000/login
router.get('/', function(req, res, next) {
    res.sendFile('index.html');
});

/*
router.get('/login',function(req, res, next) {
res.send('hello,login.html')
})
*/

module.exports = router;