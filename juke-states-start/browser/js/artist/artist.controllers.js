'use strict';

/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('ArtistsCtrl', function ($scope, $log, $rootScope, artists) {
  $scope.artists = artists;
});

/* ARTIST (SINGULAR) CONTROLLER */

juke.controller('ArtistCtrl', function ($scope, $log, artist, PlayerFactory, $rootScope, $stateParams) {

  $scope.artist = artist;
  
  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.artist.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.viewOneAlbum = function (album) {
    $rootScope.$broadcast('viewSwap', { name: 'oneAlbum', id: album._id });
  };

});
