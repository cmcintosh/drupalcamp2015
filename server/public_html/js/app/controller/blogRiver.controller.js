app.controller('blogRiver', ['$scope', 'Node', blogRiverController]);

/**
* Controller for the River view for the Blog.
*/
function blogRiverController($scope, Node) {
  $scope.blogs = [];

  Node.index().then(
    function (data) {
      $scope.blogs = data;
      console.log(data);
    },
    function (error) {
      alert('Something Bad Happened!');
      if (console !== undefined) {
        console.log(error);
      }
    }
  );
}
