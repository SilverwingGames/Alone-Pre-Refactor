'use strict';

angular.module('aloneApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.features = [];

    $http.get('/api/features').success(function(featureList) {
      $scope.features = featureList;
    });

  });
