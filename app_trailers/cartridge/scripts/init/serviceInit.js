'use strict';

var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

var YoutubeFetchResultsService = LocalServiceRegistry.createService("rest.fetch.youtube.results", {
    mockExec: function(params) {
        return true;
    },
    createRequest: function(svc, params) {
        svc.addParam("part", params.part);
        svc.addParam("key", params.key);
        svc.addParam("q", params.q);
        // svc.addParam('videoDuration', params.videoDuration);
        svc.setRequestMethod('GET');
    },
    parseResponse : function(svc, response) {
        // trace(response);
        return response.text;
    }
});

module.exports = {
    YoutubeFetchResultsService: YoutubeFetchResultsService
};
