app.directive('menuItem', [menuItemDirective]);

function menuItemDirective() {
  return {
    restrict : 'A',
    templateURL:'templates/menuItem.dir.html',
  };
}
