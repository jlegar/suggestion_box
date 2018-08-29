app.factory('suggestions', [function(){
  var posts = [
      {
        title: 'Free pizza at club meetings',
        upvotes: 15,
        comments: []
      },
      {
        title: 'End all club emails with Laffy Taffy jokes',
        upvotes: 9,
        comments: ["Comentario 1", "Comentario 2"]
      },
      {
        title: 'Retrofit water fountain with Gatorade',
        upvotes: 7,
        comments: []
      },
      {
        title: "Sing Bon Jovi\'s Living on a Prayer halfway through meetings",
        upvotes: 3,
        comments: []
      }
    ];

  function set(data){
    posts.push(data);
    localStorage.posts = JSON.stringify(posts);
  };

  function get(){
    return posts;
  };

  return {
    set: set,
    get: get
  };
}]);
