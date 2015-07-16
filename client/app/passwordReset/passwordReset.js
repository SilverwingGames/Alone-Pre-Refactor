'use strict';

angular.module('aloneApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('passwordReset', {
        url: 'password/reset?sptoken',
        templateUrl: 'app/passwordReset/passwordReset.html',
        controller: 'PasswordResetCtrl'
      });
  });
