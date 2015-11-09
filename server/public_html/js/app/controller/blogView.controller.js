app.controller('blogView', ['$scope', 'Node', '$routeParams', blogViewController]);

/**
* Controller for the Blog View.
*/
function blogViewController($scope, Node, $routeParams) {
  $scope.blogs = [];
  if($routeParams.nid !== undefined ){
    Node.get($routeParams.nid).then(
      function (data) {
        $scope.blog = data[0];
      },
      function (error) {
        alert('Something Bad Happened!');
        if (console !== undefined) {
          console.log(error);
        }
      }
    );
  }

}
