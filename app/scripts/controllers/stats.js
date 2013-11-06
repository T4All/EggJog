'use strict';

angular.module('EggJogApp')
  .controller('StatsCtrl', ['$scope', '$log', 'db', function ($scope, $log, db) {
	var today = new Date();
	var colorArray = ['#cccccc', '#1F77B4', '#1F77B4', '#1F77B4', '#1F77B4', '#1F77B4', '#cccccc'];
	colorArray[today.getDay()] = '#2CA02C';
	$scope.colorFunction = function() {
		return function(d, i) {
			var date = new Date(d[0]);
			return colorArray[date.getDay()];
		};
	}  

    $scope.xAxisTickFormatFunction = function(){
      return function(d){
        return d3.time.format('%b%e')(new Date(d));
      }
    };
    $scope.yAxisTickFormatFunction = function(){
      return function(d){
        return Math.round(d);
      }
    };

	$scope.weeklyStats = [{key: "steps", values: db.getStepsByDay()}];
}]);
