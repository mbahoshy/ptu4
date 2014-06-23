'use strict';

/**
 * @ngdoc function
 * @name ptuApp.controller:DisplaycustomerCtrl
 * @description
 * # DisplaycustomerCtrl
 * Controller of the ptuApp
 */
 
angular.module('ptuApp')
  .controller('DisplaycustomerCtrl', function ($scope, $http, $routeParams, $location, $rootScope, navService) {
	$scope.data = {};

	var id = $routeParams.id;

	console.log('display customer' + id);

	$http.get('/customerid/' + id).success(function(data, status) {
		$scope.data.customer = data;
		var title = data.nameLast + ', ' + data.nameFirst;
		navService.registerTab($scope.data, title, $location.url());
	});

	$scope.pmClick = function (pm) {
		$location.url('/pm/' + id + '/' + pm.pmid);
	}
	

});