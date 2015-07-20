'use strict';

angular.module('aloneApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('game', {
        url: '/game',
        templateUrl: 'app/game/game.html',
        controller: 'GameCtrl'
      });
  });