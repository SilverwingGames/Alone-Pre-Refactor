'use strict';

angular.module('aloneApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('emailVerification', {
        url: '/register/verify?sptoken',
        templateUrl: 'app/emailVerification/emailVerification.html',
        controller: 'EmailVerificationCtrl'
      });
  });
