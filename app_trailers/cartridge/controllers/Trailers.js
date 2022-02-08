'use strict';

var server = require('server');
// var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
// var cache = require('*/cartridge/scripts/middleware/cache');
// var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');

server.get('Home', function (req, res, next) {
    res.render('home/searchTrailers');
    next();
});

server.get('Search', server.middleware.https, function (req, res, next) { // csrfProtection.validateAjaxRequest
    var q = req.querystring.qString;
    var YoutubeHelpers = require('*/cartridge/scripts/helpers/YoutubeHelpers');
    res.json({
        response: YoutubeHelpers.youtubeSearchResults(q)
    });
    return next();
});

module.exports = server.exports();

 
