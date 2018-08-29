app.controller('SuggestionController', ['$scope', '$routeParams', function($scope, $routeParams){
  $scope.post = $scope.posts[$routeParams.id];
  $scope.comments = $scope.post.comments;
  $scope.newComment = '';
  $scope.addComment = function(){
    $scope.post.comments.push($scope.newComment);
    $scope.newComment = '';
  };
}])
