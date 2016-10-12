'use strict';

juke.factory('SongFactory', function () {

  return {
    convert: function (song) {
      song.audioUrl = '/api/songs/' + song._id + '.audio';
      return song;
    }
  };

});
