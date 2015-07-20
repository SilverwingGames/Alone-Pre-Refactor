'use strict';

angular.module('aloneApp')
  .factory('socket', function ($rootScope) {
    var socket = io.connect();

    return {
      on: onEvent(eventName, callback),
      emit: emitEvent(eventName, data, callback)
    };
  });

function onEvent (eventName, callback){
  socket.on(eventName, function(){
    var args = arguments;
    $rootScope.$apply(function(){
      callback.apply(socket, args);
    });
  });
};

function emitEvent (eventName, data, callback) {
  socket.emit(eventName, data, function() {
    var args = arguments;
    $rootScope.$apply(function () {
      if (callback) {
        callback.apply(socket, args);
      }
    });
  });
};
