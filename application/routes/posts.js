var express = require('express');
var router = require('.');
var router = express.Router();
var db = require("../conf/database");
const { successPrint, errorPrint } = require("../helpers/debug/debugprinters");
var sharp = require('sharp');
var multer = require('multer');
var crypto = require('crypto');
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
    console.log(req);
    res.send('');
});

module.exports = router;