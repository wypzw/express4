var express = require('express');
var aboutUs = express.Router();

/* GET aboutUs page. */
aboutUs.get('/about_us.html', function(req, res, next) {
    res.render('about_us' );
});

module.exports = aboutUs;
