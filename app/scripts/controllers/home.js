'use strict';

angular.module('EggJogApp')
  .controller('HomeCtrl', function ($scope, db, msg, bgCounter) {
    // TODO this will be a promised value (which is ok in this case but maybe not elsewhere)
    $scope.steps = db.getTodaysSteps();
    $scope.enabled = false;
    $scope.running = false;
    $scope.eggs = ['res/img/egg1.svg', 'res/img/egg4.svg', 'res/img/egg7.svg'];
    $scope.age = 0;
    
    function showError(err) { msg.error(err); }

    bgCounter.isRunning()
    .then(function (status) {
        $scope.enabled = $scope.running = status;
      }
      , msg
    );

    $scope.$watch('enabled', function (state) {
      if (state) {
        bgCounter.startCounting()
        .then(function() { 
          $scope.running = true; 
          }
          , showError
        );
      } else {
        bgCounter.stopCounting()
        .then(function() { 
            $scope.running = false; 
          }
          , showError
        );
      }
    });

  });
