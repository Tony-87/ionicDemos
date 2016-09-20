/**
 * Created by admin on 2016/9/11.
 */
app
  .controller('AboutCtrl', function ($scope, $ionicNavBarDelegate) {
    $scope.setNavTitle = function (title) {
      $ionicNavBarDelegate.title(title);
    }
    $scope.aboutTab = 1;
  })
  .controller('HomeTabCtrl', function ($scope) {
    console.log('HomeTabCtrl');
  })
  .controller('TabFact2Ctrl', function ($scope, $ionicNavBarDelegate, $ionicHistory) {
    //$ionicNavBarDelegate.showBackButton(false);
    $scope.hideTabs=true;
  })
  .controller('Fact3Ctrl', function ($scope, $ionicNavBarDelegate, $ionicHistory, $state) {
    //   $ionicNavBarDelegate.showBackButton(true);
    $scope.setNavTitle = function (title) {
      $ionicNavBarDelegate.setTitle(title);
      $ionicNavBarDelegate.showBackButton(true);
    }


      if ($ionicHistory.backView() == null) {
     $scope.backView="Home";

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
  .controller('ListCtrl',function($scope, $ionicNavBarDelegate){
    $scope.books = Mock.mock({

      'books|20': [{
        'id|1-1000':1000,
        'name':"@cname",
        'addr':"@csentence",
        'price':100,
        'avator':Mock.Random.image('40x40','#FF6600')

      }]
    }).books;

    $scope.test=function(){
     // $ionicNavBarDelegate.setTitle("dele");
       $ionicNavBarDelegate.showBar(false);
    }

    setTimeout(function(){
     // $ionicNavBarDelegate.setTitle("dele");
     // $ionicNavBarDelegate.showBar(false);
    },1000)
   // $ionicNavBarDelegate.setTitle("dele");
    $ionicNavBarDelegate.showBar(false);

    console.log(JSON.stringify($scope.books));
  })
;
