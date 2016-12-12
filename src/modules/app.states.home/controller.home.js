/**
 * @memberOf app.states.home
 */
(function (module) {
  'use strict';

  function HomeController($scope, statesService, shakeService, popupService) {
    var controller = this;

    $scope.search = {query: '' , results: []};

    controller.search = function(){
      statesService.search($scope.search.query).then(
        function(results){ $scope.search.results = results;}
      );
    };

    controller.discover = function(){
      if (popupService.isOpen()){ return;}
      statesService.discover().then(function(movie) {
        popupService.open(module, 'smartphone/popup.discover/', movie);
      });
    };

    $scope.$on('$ionicView.enter', function(){
      shakeService.listen(controller.discover);
    });

    $scope.$on('$ionicView.leave', function(){
      shakeService.stopListening();
    });
  }

  module.controller('homeController', [
    '$scope',
    'statesService',
    'shakeService',
    'popupService',
    HomeController
  ]);

}(angular.module('app.states.home')));
