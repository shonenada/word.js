// Create module for wordApp
var wordApp = angular.module('wordApp', [
  'ngRoute', 'wordController'
]);

wordApp.config(
  ['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'WordShowController',
      templateUrl: 'templates/word.html'
    }).
    when('/finished', {
      controller: 'FinishedController',
      templateUrl: 'templates/finished.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]
);
