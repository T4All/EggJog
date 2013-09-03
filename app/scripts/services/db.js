'use strict';

angular.module('EggJogApp')
	.service('db', function db($q, cordovaReady, msg) {

		var db;

		function initializeDb(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS Steps (day DATE, count INTEGER)');
			tx.executeSql('CREATE TABLE IF NOT EXISTS Trophies (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)');
			tx.executeSql('CREATE TABLE IF NOT EXISTS Creatures (id INTEGER PRIMARY KEY AUTOINCREMENT, type INTEGER, name TEXT, created DATE, health INTEGER, death DATE)');
		}
		// Transaction error callback
		function errorCB(err) {
			msg.error("Error processing SQL: "+err.code+" "+err);  	
		}

		function transactionP(fn) {
			var deferred = $q.defer();

			db.transaction(fn, function(err) {
					return deferred.reject(err);
				}, function() {
					msg.success('created tables');
					return deferred.resolve(); 	
				}
			);
			return deferred.promise;
		}
		
		var init = cordovaReady
				.then(function() {
					msg.info("received 'deviceready'");  	
					db = window.openDatabase("eggjog", "0.1", "EggJog DB", 1000000);
					msg.info("opened database");  	
					return transactionP(initializeDb);
				});

		init.then(function() {
			msg.success('db is ready');
			return;
		}, errorCB);	

		return {
			getTodaysSteps: function() {

			},
			getTrophies: function() {

			},

		};
	});
