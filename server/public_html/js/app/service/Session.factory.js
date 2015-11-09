app.factory('Session', ['$http', '$q', '$cookies', sessionService]);

function sessionService($http, $q, $cookies) {
  var Service = {
    start: startSession,
    end: endSession,
    data: { }
  };

  var url = "http://api.drupalcamp2015.dev";

  /**
  * Check if a cookie is set for the uid
  */
  Service.data = $cookies.getAll();

  /**
  * Create a new Session with Drupal.
  */
  function startSession() {
   var defer = $q.defer();

   var req = {
    method: 'POST',
    url: url + "/demo/remote_start_session",
    headers: {
     'Content-Type': "application/x-www-form-urlencoded"
    },
    data: $.param({
            "name": Service.data.user,
            "pass": Service.data.pass,
          })
   };
    $http(req)
    .then(
      function(response) {
        Service.data = response.data;
        alert('Welcome to drupalcamp2015!');
        
        $cookies.put('uid', response.data.uid);
        $cookies.put('name', response.data.name);

        defer.resolve(response);
      },
      function(error){
        defer.reject(error);
      }
    );

    return defer.promise;
  }

  /**
  * End a opened session.
  */
  function endSession() {

  }

  return Service;
}
