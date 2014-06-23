'use strict';

/**
 * @ngdoc function
 * @name ptuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ptuApp
 */
angular.module('ptuApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
