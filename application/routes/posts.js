var express = require('express');
var router = require('.');
var router = express.Router();
var db = require("../conf/database");
const { successPrint, errorPrint } = require("../helpers/debug/debugprinters");
var sharp = require('sharp');
var multer = require('multer');
var crypto = require('crypto');
//var PostError = require('../helpers/error/PostError');

router.post('/createPost', (req, res, next) => {
    console.log(req);
    res.send('');
});

module.exports = router;