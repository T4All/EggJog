'use strict';

angular.module('EggJogApp')
  .service('db', function db(cordovaReady, msg) {

  	function initializeDb(tx) {
    	tx.executeSql('CREATE TABLE IF NOT EXISTS Steps (day DATE, count INTEGER)');
    	tx.executeSql('CREATE TABLE IF NOT EXISTS Trophies (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)');
    	tx.executeSql('CREATE TABLE IF NOT EXISTS Creatures (id INTEGER PRIMARY KEY AUTOINCREMENT, type INTEGER, name TEXT, created DATE, health INTEGER, death DATE)');
    }
   	// Transaction error callback
    function errorCB(err) {
  		msg.error("Error processing SQL: "+err.code);  	
    }

    function msg(m) {
  		$scope.$apply(function () {
        $scope.message = m;
      });  	
    }

    cordovaReady.then(function() {
  		msg.info("received 'deviceready'");  	
    	var db = window.openDatabase("eggjog", "0.1", "EggJog DB", 1000000);
			msg.info("opened database");  	
  		db.transaction(initializeDb, errorCB, function() {
  			msg.success("created tables");  	
  		})
    });
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
