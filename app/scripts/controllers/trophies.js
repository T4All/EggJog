'use strict';

angular.module('EggJogApp')
  .controller('TrophiesCtrl', ['$scope', function ($scope) {
  	$scope.tombs = [
  	{ name: 'Cake', age: 6 }
  	, { name: 'Omelette', age: 1 }
  	, { name: 'Tart', age: 5 }
  	, { name: 'Meringue', age: 7 }
  	]
    $scope.trophies = [
    { name: 'Raw'
    	, description: 'First 1000 steps'
    }, { name: 'Scrambled'
    	, description: 'First 5000 steps'
    }, { name: 'Soft-Boiled'
    	, description: 'First 7000 steps'
    }, { name: 'Hard-Boiled'
    	, description: 'First 10000 steps'
    }, { name: 'Fried'
    	, description: 'First 20000 steps'
    }, { name: 'Sloth'
    	, description: '5 eggs totaling 5-9 days'
    }, { name: 'Zebra'
    	, description: '5 eggs totaling 10-25 days'
    }, { name: 'Gazelle'
    	, description: '5 eggs totaling 25-34 days'
    }, { name: 'Unicorn'
    	, description: '5 eggs totaling 35 days'
    }/*, { name: '1000'
    	, description: 'First 1000 steps'
    }, { name: '1000'
    	, description: 'First 1000 steps'
    }*/
    ];
  }]);
