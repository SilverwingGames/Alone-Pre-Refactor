'use strict';

angular.module('aloneApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'Reddit',
        'type': '_blank',
        'link': 'https://www.reddit.com/r/alone_incremental/'
      },
      {
        'title': 'Game',
        'link': '/game'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
