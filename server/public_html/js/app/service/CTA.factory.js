app.factory('CTA', ['$http', '$q', ctaService]);

function ctaService($http, $q) {
  var Service = {
    get: getCTA
  };

  var url = "http://api.drupalcamp2015.dev/a/cta";

  function getCTA() {
    var def = $q.defer();
    $http.get(url)
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
