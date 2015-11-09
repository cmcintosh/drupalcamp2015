app.config(['$routeProvider', routeHandler]);

function routeHandler($routeProvider) {
  $routeProvider
  .when(
    '/welcome',
    {
      controller: 'welcome',
      templateUrl: '/templates/welcome.view.html'
    }
  )
  .when(
    '/blog',
    {
      controller: 'blogRiver',
      templateUrl : '/templates/river.view.html'
    }
  )
  .when(
    '/blog/:nid',
    {
      controller: 'blogView',
      templateUrl: '/templates/blog.view.html'
    }
  )
  .when(
    '/menu',
    {
      controller: 'Menu',
      templateUrl: '/templates/menu.view.html'
    }
  )
  .when(
    '/cart',
    {
      controller: 'ShoppingCart',
      templateUrl: '/templates/cart.view.html'
    }
  )
  .when(
    '/tracker',
    {
      controller: 'OrderTracker',
      templateUrl: '/templates/tracker.view.html'
    }
  )
  .otherwise(
    {
      redirectTo: '/welcome'
    }
  );
}
