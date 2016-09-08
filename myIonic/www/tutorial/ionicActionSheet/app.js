angular.module('ionicApp', ['ionic'])

  .controller("MainCtrl", function($scope, $ionicActionSheet) {

    // 点击按钮触发，或一些其他的触发条件
    $scope.show = function() {

      // 显示操作表
      $ionicActionSheet.show({
        buttons: [
          { text: '<b>Share</b> This' },
          { text: 'Move' },
        ],
        destructiveText: 'Delete',
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        buttonClicked: function(index) {
          return true;
        }
      });

    };
  });
