juke.controller("PlaylistCtrl", function ($scope, PlaylistFactory) {
  // $scope.newPlaylist = {
  //   name: null
  // };

  $scope.createPlaylist = function (playlist) {
    return PlaylistFactory.createPlaylist(playlist);
  }


})
