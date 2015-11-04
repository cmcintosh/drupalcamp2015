app.factory('Session', ['$http', '$q', sessionService]);

function sessionService($http, $q) {
  var Service = {
    start: startSession,
    end: endSession,
    update: updateSession,
    data: { }
  };

  /**
  * Create a new Session with Drupal.
  */
  function startSession() { }

  /**
  * End a opened session.
  */
  function endSession() { }

  /**
  * Update a session.
  */
  function updateSession() { }

  return Service;
}
