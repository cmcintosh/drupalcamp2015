app.factory('Menu', ['$http', '$q', menuService]);

function menuService($http, $q) {
  var Service = {
    get: getMenu,
    setActive: setActiveMenuItem,
    data: { }
  };

  /**
  * Get a menu based on the passed ID.
  */
  function getMenu(menu_id) { }

  /**
  * Set the active menu item.
  */
  function setActive(menu_id, item_id) { }

  return Service;
}
