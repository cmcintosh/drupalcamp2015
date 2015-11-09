app.controller('welcome', ['$scope', 'Specials', 'CTA', welcomeController]);


function welcomeController($scope, Specials, CTA) {
  $scope.left_special = {};
  $scope.right_specials = [];
  $scope.cta_slideshow = [];

  Specials.get('left').then(
    function(data) {
        $scope.left_special = data[0];
    },
    function(error){

    }
  );

  Specials.get('right').then(
    function(data) {
      $scope.right_specials = data;
    },
    function(error) {

    }
  );

  CTA.get().then(
    function(data) {
        $scope.cta_slideshow = data;
        setTimeout(function(){
            $('.bxslider').bxSlider({
              auto: true,
              pager: false,
              controls: false,
            });
        }, 100);

    },
    function(error){

    }
  );
}
