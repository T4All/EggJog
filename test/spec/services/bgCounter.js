'use strict';

describe('Service: bgCounter', function () {

  // load the service's module
  beforeEach(module('EggJogApp'));

  // instantiate service
  var bgCounter;
  beforeEach(inject(function (_bgCounter_) {
    bgCounter = _bgCounter_;
  }));

  it('should do something', function () {
    expect(!!bgCounter).toBe(true);
  });

});
