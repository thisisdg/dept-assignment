'use strict';

var serviceInit = require('*/cartridge/scripts/init/serviceInit');

var youtubeSearchResults = function (q) {
    var params = {
        part: "snippet",
        key: "AIzaSyCm19lgF-bk_xv7uafCotWxQXCkIIAbw4Q",
        q: ''
    };

    if (!empty(q) && q.length > 0) {
        params.q = q;
    }
    params.q += '%7CTrailers'
    var response = serviceInit.YoutubeFetchResultsService.call(params);
    if(response.msg === 'OK') {
        var responseObj = response.object;
        return responseObj;
    }
}

module.exports = {
    youtubeSearchResults: youtubeSearchResults
};