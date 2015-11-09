app.factory('Node', ['$http', '$q', nodeService]);

/**
* Define a service used to retrieve Node data from the server.
*/
function nodeService($http, $q) {
  var Service = {
    index: nodeIndex,
    get: nodeGet,
    save: nodeSave
  };
  var url = "http://api.drupalcamp2015.dev/a/node";

  /**
  * Return the index of nodes.
  */
  function nodeIndex() {
    var def = $q.defer();

      $http.get(url)
      .success( function(data){
        def.resolve(data);
      })
      .error( function(error){
        def.reject(error);
      });

    return def.promise;
  }

  /**
  * Get a node of a specific ID or Path.
  */
  function nodeGet(nid) {
    var def = $q.defer();

    $http.get(url + "/" + nid)
      .success( function(data){
        def.resolve(data);
      })
      .error( function(error){
        def.reject(error);
      });

    return def.promise;
  }

  /**
  * Save or update a node.
  */
  function nodeSave(node) { }

  return Service;
}
