angular.module('ionicApp', ['ionic'])

.controller('MyController', function($scope, $http) {
  $scope.items = [];
  $scope.loadMore = function() {
    $http.get('/more-items').success(function(data) {
     // useItems(items);
      $scope.items=data.items;
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

  $scope.$on('stateChangeSuccess', function() {
    $scope.loadMore();
  });
})

 ;
