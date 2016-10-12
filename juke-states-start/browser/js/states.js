juke.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.when("/", "/albums");
  $urlRouterProvider.when("/artists/:id", "/artists/:id/songs");
  $stateProvider
    // .state("defaultView", {
    //   url: "",
    //   abstract: true
    // })
    .state("allAlbums", {
      url: "/albums",
      templateUrl: "/templates/allalbums.html",
      resolve: {
        albums: function (AlbumFactory) {
          return AlbumFactory.fetchAll();
        }
      },
      controller: "AlbumsCtrl"
    })
    .state("allArtists", {
      url: "/artists",
      templateUrl: "/templates/allartists.html",
      resolve: {
        artists: function (ArtistFactory) {
          return ArtistFactory.fetchAll();
        }
      },
      controller: "ArtistsCtrl"
    })
    .state("oneAlbum", {
      url: "/albums/:id",
      templateUrl: "/templates/onealbum.html",
      resolve: {
        album: function (AlbumFactory, $stateParams) {
          return AlbumFactory.fetchById($stateParams.id);
        }
      },
      controller: "AlbumCtrl"
    })
    .state("oneArtist", {
      url: "/artists/:id",
      templateUrl: "/templates/oneartist.html",
      resolve: {
        artist: function (ArtistFactory, $stateParams) {
          return ArtistFactory.fetchById($stateParams.id);
        }
      },
      controller: "ArtistCtrl"
    })
    .state("oneArtist.songs", {
      url: "/songs",
      templateUrl: "/templates/artistsongs.html",
      resolve: {
        songs: function (ArtistFactory, $stateParams) {
          return ArtistFactory.fetchById($stateParams.id).songs;
        }
      },
      controller: "ArtistCtrl"
    })
    .state("oneArtist.albums", {
      url: "/albums",
      templateUrl: "/templates/artistalbums.html",
      resolve: {
        albums: function (ArtistFactory, $stateParams) {
          return ArtistFactory.fetchById($stateParams.id).albums;
        }
      },
      controller: "ArtistCtrl"
    })
    .state("addPlaylist", {
      url:"/addplaylist",
      templateUrl: "/templates/addplaylist.html"
      // resolve: {
      //   playlist: function (PlaylistFactory) {
      //     return PlaylistFactory.createPlaylist();
      //   }
      // },
      // controller: "PlaylistCtrl"
    })

})

// juke.run(function ($transition$, $rootScope) {
//   $rootScope.$on("$transitionError", function (event, toState, toParams, fromState, fromParams, error) {
//     console.error("error");
//   })
// })
