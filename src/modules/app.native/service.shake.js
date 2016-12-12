(function (module) {
  'use strict';

  function ShakeService($q, $window, cordovaUtils) {
    var service = this;

    service.listen = cordovaUtils.whenReady(function (callback) {
      var deferred = $q.defer();
      $window.shake.startWatch(callback, null, deferred.reject);
      return deferred.promise;
    });

    service.stopListening = cordovaUtils.whenReady(function () {
      $window.shake.stopWatch();
      return true;
    });
  }

  module.service('shakeService', [
    '$q',
    '$window',
    'cordovaUtils',
    ShakeService
  ]);

}(angular.module('app.native')));
