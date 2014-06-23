'use strict';

/**
 * @ngdoc overview
 * @name ptuApp
 * @description
 * # ptuApp
 *
 * Main module of the application.
 */
angular
  .module('ptuApp', [
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/display-customer/:id', {
        templateUrl: 'views/displaycustomer.html',
        controller: 'DisplaycustomerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
