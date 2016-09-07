angular.module('ionicApp', ['ionic'])
  .controller('MyController', function($scope, $http) {
    $scope.items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    $scope.doRefresh = function() {
      $http.get('/new-items')
        .success(function(data) {
          $scope.items = data.items;
        })
        .finally(function() {
          // 停止广播ion-refresher
          $scope.$broadcast('scroll.refreshComplete');
        });
    };
  })
;
