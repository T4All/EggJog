'use strict';

angular.module('EggJogApp')
  .controller('HomeCtrl', ['$scope', 'cordovaReady', function ($scope, cordovaReady) {
    $scope.message = "Waiting for the 'deviceready' event"
    $scope.progress = '50%';
    $scope.enabled = 1;
    function initializeDb(tx) {
    	tx.executeSql('CREATE TABLE IF NOT EXISTS Steps (day DATE, count INTEGER)');
    	tx.executeSql('CREATE TABLE IF NOT EXISTS Trophies (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)');
    	tx.executeSql('CREATE TABLE IF NOT EXISTS Creatures (id INTEGER PRIMARY KEY AUTOINCREMENT, type INTEGER, name TEXT, created DATE, health INTEGER, death DATE)');
    }
   	// Transaction error callback
    function errorCB(err) {
  		msg("Error processing SQL: "+err.code);  	
    }

    function msg(m) {
  		$scope.$apply(function () {
        $scope.message = m;
      });  	
    }
   	// // Wait for device API libraries to load
    // document.addEventListener("deviceready", onDeviceReady, false);

    // // device APIs are available
    // function onDeviceReady() {
    //     alert("deviceready");
    // }

    cordovaReady.then(function() {
  		msg("received 'deviceready'");  	
    	var db = window.openDatabase("eggjog", "0.1", "EggJog DB", 1000000);
			msg("opened database");  	
  		db.transaction(initializeDb, errorCB, function() {
  			msg("created tables");  	
  		})
    });
    
  }]);
