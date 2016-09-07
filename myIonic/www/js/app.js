// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

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
  .controller('MyController2',function($scope, $http){
    $scope.items = [1,2,3,4,5,6,7,8,9,10];
    $scope.moreData=true;
    $scope.loadMore = function() {

      $http.get('/more-items').success(function(data) {

        $scope.items = data.items;
        //$scope.$broadcast('scroll.infiniteScrollComplete');
        $scope.moreData=false;
      });
    };
    $scope.moreDataCanBeLoaded=function(){
      return $scope.moreData;
    };


    $scope.$on('stateChangeSuccess', function() {
      $scope.loadMore();
    });

  })
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });


})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html",
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/facts.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    .state('tabs.course', {
      url: "/course",
      views: {
        'course-tab': {
          templateUrl: "templates/course.html"
        }
      }
    })

  $urlRouterProvider.otherwise("/tab/home");
});
