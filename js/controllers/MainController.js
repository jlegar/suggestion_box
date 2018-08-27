app.controller('MainController', ['$scope', 'suggestions', function($scope, suggestions){
  $scope.helloworld = 'Hello AngularJS!';
  $scope.posts = suggestions.posts;
}])
