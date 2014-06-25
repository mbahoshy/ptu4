'use strict';

describe('Controller: DisplaycustomerCtrl', function () {

  // load the controller's module
  beforeEach(module('ptuApp'));

  var DisplaycustomerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DisplaycustomerCtrl = $controller('DisplaycustomerCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
