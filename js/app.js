var app = angular.module('SuggestionBox', []);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'views/home.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
