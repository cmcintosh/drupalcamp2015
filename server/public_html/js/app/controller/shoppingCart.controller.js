app.controller('ShoppingCart', ['$scope', 'Cart', 'Session', 'Socket', shoppingCart]);

function shoppingCart($scope, Cart, Session, Socket) {
  $scope.cart = Cart;

  $scope.checkout = function() {
    Socket.emit('recieveNewOrder', { items: Cart.data.items, user: Session.data });
    Cart.data.items = [];
    $('.status').append('<div class="item">Your order is now being processes and can be <a href="#/tracker">tracked here</a>.</div>');
    setTimeout(function(){
      $('.status .item').hide(500);
    }, 500);
  }

  Socket.on('orderConfirmation', function(data){
    if( Cart.data.orders == undefined) {
      Cart.data.orders = [data.order_id];
    }
    else {
      Cart.data.orders.push(data.order_id);
    }
  });

}
