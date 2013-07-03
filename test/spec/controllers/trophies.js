'use strict';

describe('Controller: TrophiesCtrl', function () {

  // load the controller's module
  beforeEach(module('EggJogApp'));

  var TrophiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrophiesCtrl = $controller('TrophiesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
