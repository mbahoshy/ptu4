'use strict';

/**
 * @ngdoc function
 * @name ptuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ptuApp
 */
angular.module('ptuApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
