app.controller('OrderTracker', ['$scope', 'Socket', 'Cart', 'Session', orderTrackerController]);

function orderTrackerController($scope, Socket, Cart, Session) {
  $scope.order = {
    status: -1
  };

  Socket.emit('requestOrderData', {});

  Socket.on('recieveOrderData', function(data){
    $scope.order = data[0];
  });

}
