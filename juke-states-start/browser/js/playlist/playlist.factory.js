juke.factory("PlaylistFactory", function ($http) {
  var factory = {};
  factory.createPlaylist = function (playlist) {
    $http.post("/api/playlists", playlist)
      .then(function (response) {
        var playlist = response.data;
        return playlist;
      })
  }
  return factory;
})
