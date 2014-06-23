'use strict';

/**
 * @ngdoc function
 * @name ptuApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the ptuApp
 */


angular.module('ptuApp').controller("navigationController", function ($scope, $http, $rootScope, $location, navService) {
	// $rootScope.navArray = [];
	$rootScope.$on('updateNav', function () {
		$('.active-nav').removeClass('active-nav');
		for (var i = 0; i < navService.navArray.length; i++) {
			if(navService.navArray[i].url == $location.url()) {
				navService.navArray[i].class = 'active-nav';
				break;
			}
		}
		$scope.tabs = navService.navArray;

	});



	$scope.switchTab = function (tab, $event) {
		$('.active-nav').removeClass('active-nav');
		$(event.target).addClass('active-nav');
		if (tab === 0) {
			$location.url('/');
		} else {
			$scope.$on('$routeChangeSuccess', function (evt, next, prev) {
				next.scope.data = tab.data;
			});
			$location.url(tab.url);
		}
	}

	$scope.closeTab = function (tab) {
		var numTabs = navService.navArray.length;
		for(var i = 0; i < numTabs; i ++) {
			if(tab.url === navService.navArray[i].url) {
				navService.navArray.splice(i,1);
				$location.url('/');
				break;
			}
		}
	}

});

angular.module('ptuApp').factory('navService', function($rootScope, $location) {
	return {
		navArray: [],

		pushNav: function (data) {

		
		},

		registerTab: function (data, title, url) {
			var that = this;
			// var location = $location;
			// pushNav(scope);


			// scope.$on('$routeChangeStart', function(evt, next, current) {
			// 	pushNav(scope);
			// 	// console.dir($scope);


			// });


			function pushNav (data) {
				// console.dir(location);
				var numTabs = that.navArray.length;
				var x = (function () {
					for(var i = 0; i < numTabs; i ++) {
						if (that.navArray[i].url == url) {
							that.navArray[i].data = data;
							$rootScope.$emit('updateNav');
							return true;
						}
					}
				})();
				console.dir(x);
				if (x != true) {
					if (numTabs === 5) {
						that.navArray.pop();
					}

					that.navArray.unshift({
						url: url,
						title: title,
						data: data
					});


					$rootScope.$emit('updateNav');
				}

			}
			pushNav(data);

		}
	}


});
