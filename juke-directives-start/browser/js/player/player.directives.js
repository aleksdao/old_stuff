juke.directive("playerDirective", function (PlayerFactory) {
  return {
    restrict: "EAC",
    templateUrl: "/js/player/templates/player.html",
    link: function (scope) {
      angular.extend(scope, PlayerFactory);
      scope.toggle = function () {
        if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
        else PlayerFactory.resume();
      };

      scope.getPercent = function () {
        return PlayerFactory.getProgress() * 100;
      };

      scope.currentSong = function () {
        return PlayerFactory.getCurrentSong();
      }
    }
  }
})
