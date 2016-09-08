angular.module('ionicApp', ['ionic'])

  .controller('MainCtrl', function($scope, $ionicSlideBoxDelegate) {

    $scope.slideHasChanged =  function(index) {
      console.log('第N块', index);
    };
    $scope.nextSlide = function() {
      $ionicSlideBoxDelegate.next();
    }

  });
