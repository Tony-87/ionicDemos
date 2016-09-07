angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', function($scope, $ionicScrollDelegate) {
  $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop();
  };
})
  ;
