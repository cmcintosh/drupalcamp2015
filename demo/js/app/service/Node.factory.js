app.factory('Node', ['$http', '$q', nodeService]);

/**
* Define a service used to retrieve Node data from the server.
*/
function nodeService($http, $q) {
  var Service = {
    index: nodeIndex,
    get: nodeGet,
    save: nodeSave,
  };

  /**
  * Return the index of nodes.
  */
  function nodeIndex() { }

  /**
  * Get a node of a specific ID or Path.
  */
  function nodeGet(nid, path) { }

  /**
  * Save or update a node.
  */
  function nodeSave(node) { }

  return Service;
}
