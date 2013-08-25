'use strict';

function whocares(){}

angular.module('EggJogApp')
.service('bgCounter', function(cordovaReady, $q) {
  var bgCounterP, isRunning, lastError = '', ping = whocares, startCount, stopCount;

  function ok(data) { isRunning = !!data.ServiceRunning; ping(); }
  function fail(err) { lastError = err; ping(err); }

  bgCounterP = cordovaReady.then(function() { return cordova.require('cordova/plugin/myService'); });
  bgCounterP.then(function () {
    bgCounter.getStatus(ok, fail);
  });

  return {
    status: function(){
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
            bgCounter.registerForBootStart(whocares,whocares);
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
