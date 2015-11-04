app.config(['$routeProvider', routeHandler]);

function routeHandler($routeProvider) {
  $routeProvider
    .when(
      '/blog',
      {
        controller: 'blogRiver',
        templateUrl : '/templates/river.view.html'
      }
    )
    .when( )
    .otherwise(
      {
        controller: 'menuRouteController',
      }
    );
}
