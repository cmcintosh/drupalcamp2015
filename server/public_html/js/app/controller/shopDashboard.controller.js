angular
  .module('BackOffice')
  .controller('shopDashboard',
    ['$scope', 'Socket', shopDashboardController]
  );

function shopDashboardController($scope, Socket) {
  $scope.orders = [];
  $scope.selectedOrder = 0;

  Socket.on('orderConfirmation', function(data){
    $scope.orders = data;
  });

  Socket.on('recieveOrderData', function(data){
      $scope.orders = data;
  });

  Socket.emit('requestOrderData', { });

  $scope.nextOrder = function() {
    $scope.selectedOrder = $scope.selectedOrder + 1;
    if ($scope.selectedOrder > $scope.orders.length - 1) {
      $scope.selectedOrder = 0;
    }
  }

  $scope.previousOrder = function() {
    $scope.selectedOrder =$scope.selectedOrder -1;
    if($scope.selectedOrder < 0) {
      $scope.selectedOrder = $scope.orders.length - 1;
    }
  }

  $scope.nextStep = function() {
    Socket.emit('nextStepOrder', { id: $scope.selectedOrder });
  }

  $scope.cancelOrder = function(){
    Socket.emit('cancelOrder', { id: $scope.selectedOrder });
  }
}
