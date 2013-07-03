'use strict';

angular.module('EggJogApp', [])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true)
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        tab: 'home'
      })
      .when('/stats', {
        templateUrl: 'views/stats.html',
        controller: 'StatsCtrl',
        tab: 'stats'
      })
      .when('/trophies', {
        templateUrl: 'views/trophies.html',
        controller: 'TrophiesCtrl',
        tab: 'trophies'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        tab: 'about'
      })      .otherwise({
        redirectTo: '/home'
      });
  });
