/**
 * Created by admin on 2016/9/11.
 */
app
  .controller('AboutCtrl',function($scope, $ionicNavBarDelegate){
    $scope.setNavTitle = function(title) {
      $ionicNavBarDelegate.setTitle(title);
    }
    $scope.aboutTab=1;
  })
  .controller('HomeTabCtrl', function($scope) {
    console.log('HomeTabCtrl');

  })
  .controller('Fact3Ctrl', function($scope,$ionicNavBarDelegate) {
    $ionicNavBarDelegate.setTitle("aa");
    $ionicNavBarDelegate.showBackButton();
    $scope.setNavTitle = function(title) {
      $ionicNavBarDelegate.setTitle(title);
      $ionicNavBarDelegate.showBackButton();
    }
    $scope.goBack = function() {
      $ionicNavBarDelegate.back();
    }

  })

;
