app.factory('Categories', ['$http', '$q', categoryService]);

function categoryService($http, $q) {
  var Service = {
    get: getCategories
  };

  var url = "http://api.drupalcamp2015.dev/a/categories";

  function getCategories() {
      var def = $q.defer();
      $http.get(url)
        .success(function(data){
          def.resolve(data);
        })
        .error(function(error) {
          def.reject(error);
        });
        return def.promise;
  }
  return Service;
}
