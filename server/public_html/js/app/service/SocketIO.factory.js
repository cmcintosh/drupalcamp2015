app.factory('Socket', ['$rootScope', SocketIOFactory]);

function SocketIOFactory($rootScope){
  var Socket = io.connect();
  return {
    on : function (eventName, callback) {
      Socket.on(eventName, function(){
          var args = arguments;
          $rootScope.$apply(function() {
            callback.apply(Socket, args);
          });
      });
    },
    emit : function (eventName, data, callback) {
      Socket.emit(eventName, data, function(){
        var args = arguments;
        $rootScope.$appy(function(){
          if (callback) {
            callback.apply(Socket, args);
          }
        });
      });
    }
  }
};
