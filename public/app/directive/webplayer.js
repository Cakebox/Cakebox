app.directive('webplayer',
    function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directive/webplayer.html',
            link: function (scope, element, attributes) {
                var setupVlcPlayer = function(vlcData) {
                    if (vlcData.url && vlcData.filename) {
                        var vlc = document.getElementById("vlc");
                        if (vlc)
                        {
                            var options = [":vout-filter=deinterlace", ":deinterlace-mode=linear"];
                            var id = vlc.playlist.add(vlcData.url, vlcData.filename, options);
                            if (vlcData.autoplay == 'true')
                                vlc.playlist.playItem(id);
                        }
                    }
                }

                scope.$watch(function () {
                    return {
                        'url': attributes.vlcUrl,
                        'filename': attributes.vlcFilename,
                        'autoplay': attributes.vlcAutoplay
                    };
                }, setupVlcPlayer, true);
            }
        }
    }
);
