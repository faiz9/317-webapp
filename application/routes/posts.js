var express = require('express');
var router = require('.');
var router = express.Router();
var db = require("../conf/database");
const { successPrint, errorPrint } = require("../helpers/debug/debugprinters");
var sharp = require('sharp');
var multer = require('multer');
var crypto = require('crypto');
const PostError = require('../helpers/debug/error/PostError');
const { response } = require('../app');
const { route } = require('.');
//var PostError = require('../helpers/error/PostError'); my app keeps crashing

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/images/uploads");
    },
    filename: function(req, file, cb) {
        let fileExt = file.mimetype.split('/')[1];
        let randomName = crypto.randomBytes(22).toString("hex");
        cb(null, '${randomName}.${fileExt}');
    }
});


var uploader = multer({
    storage: storage
});

router.post('/createPost', uploader.single("uploadImage"), (req, res, next) => {
    let fileUploaded = req.file.path;
    let fileAsThumbnail = 'thumbnail-${req.file.fileName}';
    let destinationOfThumbnail = req.file.destination + "/" + fileAsThumbnail;
    let title = req.body.title;
    let description = req.body.description;
    let fk_userId = req.session.userId;

    /* do server validation on your own
     * if any values that used for the insert statement are undefined, mysql.query or execute will fail
     * with the following error: 
     * BIND parameter cannot be undefined 
     * */

    sharp(fileUploaded)
        .resize(200)
        .toFile(destinationOfThumbnail)
        .then(() => {
            let baseSQL = 'INSERT INTO posts (title, description, photopath, thumbnail, created, fk_userid) VALUE (?,?,?,?, now(),?);;';
            return db.execute(baseSQL, [title, description, fileUploaded, destinationOfThumbnail, fk]);
        })
        .then(([results, fields]) => {
            if (results && results.affectedRows) {
                successPrint("Your Post was created successfully"); // video creating a new post uses flash I have errors using flash
                resp.json({ status: "OK", message: "post was created", "redirect": "/" });
                //res.redirect('/');
            } else {
                //throw new PostError('Post could not be created!', '/postimage', 200);
                resp.json({ status: "OK", message: "post was not created", "redirect": "/postimage" });
            }
        })
        .catch((err) => {
            if (err instanceof PostError) {
                errorPrint(err.getMessage());
                // req.flash('error', err.getMessage()); again flash doesnt work
                res.status(err.getStatus());
                res.redirect(err.getRedirectURL());
            } else {
                next(err);
            }
        })
});

//localhost:3000/posts/search?search=value
router.get('/search', (req, res, next) => {
    let searchTerm = req.query.search;
    // res.send(req.query);
    if (!searchTerm) {
        res.send({
            resultsStatus: "info",
            message: "No search term given",
            results: []
        });
    } else {
        let baseSQL = "SELECT id, title, description, thumbnail, concat_ws('', title, description) AS haystack \
        FROM posts \
        HAVING haystack like ?;";
        let sqlReadySearchTerm = "%" + searchTerm + "%";
        db.execute(baseSQL, [sqlReadySearchTerm])
            .then(([esults, fields]) => {
                if (results && results.length) {
                    res.send({
                        resultsStatus: "info",
                        message: '${results.length} results found',
                        results: results

                    });
                } else {
                    //return db.query()
                    db.query('select id, title, description, thumbnail, created from posts ORDER BY created DESC LIMIT 4', [])
                        .then(([results, fields]) => {
                            res.send({
                                resultsStatus: "info",
                                message: "No results found but here are 4 most recent post",
                                results: results

                            });
                        })
                }
            })
            .catch((err) => next(err))
    }
});

module.exports = router;