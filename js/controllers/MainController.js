app.controller('MainController', ['$scope', 'suggestions', function($scope, suggestions){
  $scope.title = '';
  localStorage.setItem('prueba', 'que fuerte!');
  $scope.posts = suggestions.posts;
  $scope.addSuggestion = function(){
    if (!$scope.title || ($scope.title === '')) {
      return;
    }
    const suggestion = {
      title: $scope.title,
      upvotes: 0,
      comments: []
    };
    $scope.posts.push(suggestion);
    $scope.title = '';
  }
  $scope.addVote = function (post) {
    post.upvotes++;
  }
}])
