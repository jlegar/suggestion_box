app.controller('MainController', ['$scope', 'suggestions', function($scope, suggestions){
  $scope.title = '';
  $scope.posts = suggestions.posts;
  localStorage.setItem('posts', JSON.stringify($scope.posts));
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
