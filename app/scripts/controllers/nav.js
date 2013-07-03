'use strict';

angular.module('EggJogApp')
  .controller('NavCtrl', ['$scope', function ($scope) {
    $scope.tabs = ['home', 'stats', 'trophies', 'about'];
    $scope.currentTab = 'home';

    $scope.$on('$routeChangeSuccess', function(event, route) {
		$scope.currentTab = route.tab;
	});

  }]);
