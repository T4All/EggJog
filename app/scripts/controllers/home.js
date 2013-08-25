'use strict';

angular.module('EggJogApp')
  .controller('HomeCtrl', function ($scope, db, msg) {
    $scope.progress = '50%';
    $scope.enabled = 1;
    msg.info("home view");

  });
