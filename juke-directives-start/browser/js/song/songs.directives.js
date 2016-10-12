juke.directive("songsDirective", function (PlayerFactory) {
  return {
    scope: {
      songs: "="
    },
    templateUrl: "/js/song/templates/songlist.html",
    link: function (scope) {
      scope.toggle = function (song) {
          if (song !== PlayerFactory.getCurrentSong()) {
            PlayerFactory.start(song, scope.songs);
          } else if ( PlayerFactory.isPlaying() ) {
            PlayerFactory.pause();
          } else {
            PlayerFactory.resume();
          }
        };

      scope.getCurrentSong = function () {
        return PlayerFactory.getCurrentSong();
      };

      scope.isPlaying = function (song) {
        return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
      };

    }
  }
})

juke.directive("doubleClick", function () {
  return {
    restrict: "A",
    scope: {
      doubleClick: "&"
    },
    link: function (scope, element) {
      element.on("dblclick", function () {
        scope.doubleClick();
      })
    }
  }
})
