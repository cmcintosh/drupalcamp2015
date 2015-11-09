app.directive('drupalForm', [drupalFormAPI]);

function drupalFormAPI() {
  return {
    restrict : 'A',
    templateURL:'templates/form.dir.html',
    controller: 'form',
  };
}
