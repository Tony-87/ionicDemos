angular.module('ionicApp', ['ionic'])

  .controller('MainCtrl', function ($scope, $ionicScrollDelegate) {
    $scope.scrollMainToTop = function () {
      $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
    };
    $scope.scrollSmallToTop = function () {
      $ionicScrollDelegate.$getByHandle('small').scrollTop();
    };
  })
;
