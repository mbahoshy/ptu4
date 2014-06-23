'use strict';

/**
 * @ngdoc function
 * @name ptuApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ptuApp
 */
angular.module('ptuApp')
  .controller('HomeCtrl', function ($scope, $http, $location) {
	$scope.data = {};
	$http.get('/customer').success(function(data, status) {
		$scope.data.customerList = data;

	});


	$scope.customerClick = function (customer) {
		$location.url('/display-customer/' + customer._id);

	}

	$scope.instantSearch = function () {
		if (this.stoppedTyping) clearTimeout(this.stoppedTyping);
		// set a new timer to execute 3 seconds from last keypress
		this.stoppedTyping = setTimeout(function(){
		    // $('#customer_search').trigger('click');
		    $scope.search();
		}, 100); 
	}

	$scope.search = function () {


	    var searchterms = $scope.data.search.terms.toUpperCase();
	    var searchparameters = 'search.' + $scope.data.search.parameters;

	    if (searchterms == '') {
	        $.get('/customer', function(data) {
	            $scope.data.customerList = data;

	        });                
	    } else {

	        var y = {};
	        y[searchparameters] = searchterms;

	        $http.post('/customersearch', y).success(function(data, status) {
	            $scope.data.customerList = data;
	        });
	    }
	}

	console.log('home page');
  });
