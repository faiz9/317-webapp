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

module.exports = router;