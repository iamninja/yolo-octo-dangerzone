'use strict';
  

angular.module('anime-track', ['ngResource', 'ngRoute'])
  .factory('GUI', function() {
    return require('nw.gui');
  })
  .factory('Window', ['GUI', function(gui) {
    return gui.Window.get();
  }])
  .controller('Toolbar', ['$scope', 'Window',
    function($scope, Window) {
      $scope.minimize = function() {
        Window.minimize();
      };

      $scope.toggleFullscreen = function() {
        Window.toggleKioskMode();
      };

      $scope.close = function() {
        Window.close();
      };
    }
  ])
  .controller('loginCtrl', ['$scope', function($scope){
      $scope.load = function() {
        $(document).ready(function() {
          $('#signup,#signin').click(function(event) {
            event.preventDefault();
            $('div.form-auth').toggle('500');
          });
        });
      };

      $scope.load();
  }])
  .config(['$routeProvider',function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../partials/login.html',
        controller: 'loginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
