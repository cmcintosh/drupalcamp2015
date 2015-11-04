app.directive('navbarHeader', [navbarHeaderDirective]);

/**
* Creates the Navbar Header
*/
function navbarHeaderDirective() {
  return {
    restrict: 'A',
    templateUrl: '/templates/navbarHeader.directive.js'
  };
}
