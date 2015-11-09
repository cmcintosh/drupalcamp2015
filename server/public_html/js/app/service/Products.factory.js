app.factory('Products', ['$http', '$q', productService]);

/**
* Fetches product information from drupal.
*/
function productService($http, $q) {

  var Service = {
    index: getIndex,
  }
  var url ="http://api.drupalcamp2015.dev/a/products";

  function getIndex() {
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
