app.controller('Menu', ['$scope', 'Categories', 'Products', 'Cart', menuController]);

function menuController($scope, Categories, Products, Cart) {
  $scope.categories = [];
  $scope.menuItems = [];

  Categories.get().then(
    function(data){
      $scope.categories = data;
    },
    function(error){
      // Error Handling here.
    }
  );

  Products.index().then(
    function(data) {
      $scope.products = data;
    },
    function(error) {

    }
  );

  $scope.addToCart = function(item) {
    Cart.addItem(item);
    $('.status').append('<div class="item">Added item to cart</div>');
    setTimeout(function(){
      $('.status .item').hide(500);
    }, 500);
  }

  $scope.cart = Cart;
}
