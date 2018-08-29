app.controller('MainController', ['$scope', 'suggestions', function($scope, suggestions){
  $scope.title = '';
  $scope.posts = suggestions.get();
  $scope.addSuggestion = function(){
    if (!$scope.title || ($scope.title === '')) {
      return;
    }
    const suggestion = {
      title: $scope.title,
      upvotes: 0,
      comments: []
    };
    suggestions.set(suggestion);
    $scope.title = '';
  }
  $scope.addVote = function (post) {
    post.upvotes++;
  }
}])
