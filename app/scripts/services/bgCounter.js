'use strict';

function whocares(){}

angular.module('EggJogApp')
.factory('bgCounter', function(cordovaReady, $q) {
  var bgCounterP;

  bgCounterP = cordovaReady.then(function() {
    return cordova.require('cordova/plugin/myService');
  });

  return {
    isRunning: function(){
      return bgCounterP.then(function(bgCounter) {
        var deferred = $q.defer();
        bgCounter.getStatus(
          function(data) { deferred.resolve(data.ServiceRunning); }
          , function(err) { deferred.reject(err); }
        );
        return deferred.promise;
      });
    }
    , startCounting: function(){
      return bgCounterP.then(function(bgCounter) {
        var deferred = $q.defer();
        bgCounter.startService(
          function(data) {
            bgCounter.registerForBootStart(whocares, whocares);
            deferred.resolve(data);
          }
          , function(err) { deferred.reject(err); }
        );
        return deferred.promise;
      });
    }
    , stopCounting: function(){
      return bgCounterP.then(function(bgCounter) {
        var deferred = $q.defer();
        bgCounter.deregisterForBootStart(whocares,whocares);
        bgCounter.stopService(
          function(data) { deferred.resolve(data); }
          , function(err) { deferred.reject(err); }
        );
        return deferred.promise;
      });
    }
  }
});
