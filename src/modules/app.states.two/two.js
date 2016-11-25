/**
 * @module app.states.two
 */
(function (module) {
  'use strict';

  var STATE_TWO = 'states.two';

  function config($stateProvider) {
    $stateProvider.state(STATE_TWO, {
      data: { module: module, navBar: true },
      url: '/two',
      views: {
        'content-smartphone': {}
      }
    });
  }

  function run($rootScope) { $rootScope.STATE_TWO = STATE_TWO; }

  module.constant('STATE_TWO', STATE_TWO);
  module.config(['$stateProvider', config]);
  module.run(['$rootScope', run]);

}(angular.module('app.states.two', ['app.states'])));
