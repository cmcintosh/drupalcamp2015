app.factory('Cart', ['$http', '$q', cartService]);

function cartService($http, $q) {
  var Service = {
    data: {
      items: [],
      status: -1
    },
    addItem: addItemToCart
  };

  function addItemToCart(cartItem) {
    Service.data.items.push(cartItem);
  }

  return Service;
}
