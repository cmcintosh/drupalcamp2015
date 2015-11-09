app.controller('AppHeader', ['$scope', 'Session', '$cookies', appHeaderController]);

function appHeaderController($scope, Session, $cookies) {
  $scope.showLogin = false;
  $scope.authenticated = ($cookies.get('uid') !== undefined);
  $scope.session = Session;
  $scope.user_actions = [];

  $scope.showLoginForm = function() {
    $scope.showLogin = true;
  }

  $scope.hideLoginForm = function() {
    $scope.showLogin = false;
  }

  $scope.loginUser = function() {
    if($scope.user !== '' && $scope.pass !== ''){
      $scope.session.start().then(
        function(response){
          if (response.data.uid) {
            $scope.showLogin = false;
            $scope.authenticated = true;
          }
        },
        function(error) { /* Error Handling */ }
      );
    }
  }

  $scope.showRegistrationForm = function() {
    $scope.showRegistration = true;
  }

  $scope.hideRegistrationForm = function() {
    $scope.showRegistration = false;
  }
}
