angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope, $ionicTabsDelegate) {
  $scope.selectTabWithIndex = function(index) {
    $ionicTabsDelegate.select(index);
  }
})

 ;
