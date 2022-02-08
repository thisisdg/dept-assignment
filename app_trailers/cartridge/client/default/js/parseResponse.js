'use strict';

window.jQuery = window.$ = require('jquery');

var generateIframes = function (videoItems) {
    var iframe = '';
    videoItems.forEach(function (video) {
        // console.log(video);
        if (video.id.kind == 'youtube#video') {
            console.log(video.id.videoId);
            iframe += '<iframe allowFullScreen="allowFullScreen" src="https://www.youtube.com/embed/' + video.id.videoId + '?ecver=1&amp;iv_load_policy=1&amp;rel=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;" allowtransparency="true" frameborder="0"></iframe>'
        }
    });
    return iframe;
}

$(document).ready(function () {
    $(document).on('submit', '.search-trailer', function(e) {
        e.preventDefault();
        // console.log('Hi');
        var url = $(this).attr('action');
        var data =  $(this).serialize();

        $.ajax({
            method: 'GET',
            url: url,
            dataType: 'json',
            data: data,
            success: function (data) {
                var response = JSON.parse(data.response);
                $('.embeddedPlayer').html(generateIframes(response.items));
            },
            error: function (data) {
                console.log('error in request');            }
        });
    });
});
