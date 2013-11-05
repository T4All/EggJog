'use strict';

angular.module('EggJogApp')
  .controller('StatsCtrl', ['$scope', '$log', function ($scope, $log) {
		var today = new Date();
		var colorArray = ['#cccccc', '#1F77B4', '#1F77B4', '#1F77B4', '#1F77B4', '#1F77B4', '#cccccc'];
		colorArray[today.getDay()] = '#2CA02C';
		$scope.colorFunction = function() {
			return function(d, i) {
				var date = new Date(d[0]);
				return colorArray[date.getDay()];
			};
		}  
		function getRandomInt(min, max) {
		  return Math.floor(Math.random() * (max - min + 1) + min);
		}
		function mockStats() {
			var now = today.getTime();
			var oneDay = 24 * 3600 * 1000;
			var stat = [];
			for (var i = 6; i >= 0; i--) {
				stat.push([now - i * oneDay, getRandomInt(1000, 10000)]);
			}
			return [{key: "steps", values: stat}];
		}
		$scope.weeklyStats = mockStats();
    $scope.xAxisTickFormatFunction = function(){
      return function(d){
        return d3.time.format('%b%e')(new Date(d));
      }
    };
}]);
