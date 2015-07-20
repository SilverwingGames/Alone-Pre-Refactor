'use strict';

angular.module('aloneApp')
  .controller('ChatCtrl', function ($scope) {
    $scope.messages = [
      {
        'username' : 'FallenAdvent',
        'timestamp': '5:16 PM',
        'message'  : 'This is a random message'
      }
    ];
    //socket.on('init', initEvent(data));
  });

  function initEvent (data) {
    $scope.name = data.name;
  };
