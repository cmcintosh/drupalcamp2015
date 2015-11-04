app.factory('FormAPI', ['$http', '$q', formAPIService]);

/**
* Defines a Service to get data from our FormAPI end point.
*/
function formAPIService($http, $q) {
  var Service = {
    get: getForm,
    post: postForm,
    data : { },
  };

  /**
  * Return data for a form based on the form id.
  */
  function getForm(form_id) { }

  /*
  * Post submitted data from a form to drupal.
  */
  function postForm(form_id, data) { }

  return Service;
}
