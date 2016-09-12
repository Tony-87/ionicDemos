/**
 * Created by admin on 2016/9/11.
 */
app
  .controller('AboutCtrl', function ($scope, $ionicNavBarDelegate) {
    $scope.setNavTitle = function (title) {
      $ionicNavBarDelegate.setTitle(title);
    }
    $scope.aboutTab = 1;
  })
  .controller('HomeTabCtrl', function ($scope) {
    console.log('HomeTabCtrl');
  })
  .controller('TabFact2Ctrl', function ($scope, $ionicNavBarDelegate, $ionicHistory) {

  })
  .controller('Fact3Ctrl', function ($scope, $ionicNavBarDelegate, $ionicHistory, $state) {
    //   $ionicNavBarDelegate.showBackButton(true);
    $scope.setNavTitle = function (title) {
      $ionicNavBarDelegate.setTitle(title);
      $ionicNavBarDelegate.showBackButton(true);
    }

    $scope.goBack = function () {
      if ($ionicHistory.backView() == null) {
        $state.go("tabs.home");
      }
      else {
        $ionicHistory.goBack();
      }
    }
  })
  .controller('Fact4Ctrl', function ($scope, $ionicNavBarDelegate) {
    $ionicNavBarDelegate.setTitle("aa");
    $ionicNavBarDelegate.showBackButton();
    $scope.setNavTitle = function (title) {
      $ionicNavBarDelegate.setTitle(title);
      $ionicNavBarDelegate.showBackButton();
    }
    $scope.goBack = function () {
      $ionicNavBarDelegate.back();
    }

  })
;
