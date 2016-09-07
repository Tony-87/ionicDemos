angular.module('ionicApp', ['ionic'])

  .controller('MyCtrl', function($scope) {

    $scope.data = {
      showDelete: false
    };

    $scope.edit = function(item) {
      alert('Edit Item: ' + item.id);
    };
    $scope.share = function(item) {
      alert('Share Item: ' + item.id);
    };
    $scope.top=function(item, fromIndex){
      alert('Top Item: ' + item.id);
    };
    $scope.moveItem = function(item, fromIndex, toIndex) {

      $scope.items.splice(fromIndex, 1);
      $scope.items.splice(toIndex, 0, item);
    };

    $scope.onItemDelete = function(item) {
      $scope.items.splice($scope.items.indexOf(item), 1);
    };

    $scope.items = [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 }

    ];

  });
