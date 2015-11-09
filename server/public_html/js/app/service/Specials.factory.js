app.factory('Specials', ['$http', '$q', specialService]);

function specialService($http, $q) {
  var Service = {
    get: getSpecials
  };

  var url = "http://api.drupalcamp2015.dev/a/specials";
  function getSpecials(side) {
    var def = $q.defer();
    $http.get(url + "/" + side)
      .success(function(data){
        def.resolve(data);
      })
      .error(function(error){
        def.reject(error);
      });
      return def.promise;
  }

  return Service;
}
