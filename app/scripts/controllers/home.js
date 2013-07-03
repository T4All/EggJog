'use strict';

angular.module('EggJogApp')
  .controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.progress = '50%'
    $scope.enabled = 1;
  }]);
