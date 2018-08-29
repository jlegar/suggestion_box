app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions){
  $scope.post = suggestions.get()[$routeParams.id];
  $scope.comments = $scope.post.comments;
  $scope.newComment = '';
  $scope.addComment = function(){
    $scope.post.comments.push($scope.newComment);
    $scope.newComment = '';
  };
}])
