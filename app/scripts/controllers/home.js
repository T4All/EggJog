'use strict';

angular.module('EggJogApp')
  .controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.progress = '10%'
    $scope.enabled = 1;
  }]);
