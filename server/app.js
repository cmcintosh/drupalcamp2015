var fs = require("fs"),
    http = require("http"),
    io = require("socket.io"),
    url = require("url")
    mime = require('mime');

var server = http.createServer();
    server.listen(8080);
    server.addListener("request", httpRequestHandler);

var sockets = io.listen(server);
    sockets.on('connection', ioConnection);

/**
* Handle Incoming http Requests
*/
function httpRequestHandler(request, response) {
  var path = url.parse(request.url).pathname;
  // Basic stuff to plug in to the NodeCG Dashboard
  switch (path) {
    // For cases where we need to load up a physical file.
    case "/":
      path = "index.html";
    default:
      var target_file = "public_html/" + path;
      var mime_type = mime.lookup(target_file);
      fs.readFile(target_file, function(error, data) {
        if (error) {
          response.writeHead(404);
          response.write('Page not Found');
          response.end();
        }
        else {
          response.writeHead(200, {"Content-Type": mime_type});
          response.write(data, "utf8");
          response.end();
        }

      });
    break;
  }
}

/**
* Handle Incoming Socket Requests
*/
var orders = [];
function ioConnection(socket) {

  socket.on('recieveNewOrder', function(data){
    data.status = 1;
    orders.push(data);
    sockets.emit('recieveOrderData', orders);
  });

  socket.on('nextStepOrder', function(data){
    orders[data.id].status++;
    sockets.emit('recieveOrderData', orders);
  });

  socket.on('requestOrderData', function(){
    sockets.emit('recieveOrderData', orders);
  });

  socket.on('cancelOrder', function(data){
    orders[data] = null;
    sockets.emit('recieveOrderData', orders);
  });
}
