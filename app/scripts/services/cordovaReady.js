'use strict';

angular.module('EggJogApp')
.factory('cordovaReady', ['$q', function($q) {
    var deferred = $q.defer();
    document.addEventListener('deviceready', function () {
      deferred.resolve();
    }, false);
    return deferred.promise;
}]);
