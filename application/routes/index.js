var express = require('express');
var router = express.Router();
var IsLoggedIn = require('../middleware/routeprotectors').userIsLoggedIn;
var getRecentPosts = require('../middleware/postsmiddleware').getRecentPosts;
var db = require("../conf/database");

/* GET home page. */
//localhost:3000/login


router.get('/', getRecentPosts, function(req, res, next) {
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
render.get('/post/:id(\\d+)', (req, res, next) => {
    let baseSQL =
        " SELECT u.id, u.username, p.title, p.description, p.photopath, p.created \
FROM users u \
JOIN posts p \
ON u.id=fk_userid \
WHERE p.id=25;";

    let postId = req.params.id;
    db.execute(baseSQL, [postId])
        .then(([results, fields]) => {
            if (results && results.length) {
                let pos = results[0];
                res.render('imagepost', { currentPost: post });
            } else {
                successPrint('Error! This is not the post you are looking for!')
                res.redirect('/');
            }
        })

});

router.get('/post/help', (req, res, next) => {
    res.send({ literal: "literal help" });
}); */

module.exports = router;