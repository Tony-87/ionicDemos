angular.module('ionicApp', ['ionic'])


  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: "tabs.html"
      })
      .state('tabs.home', {
        url: "/home",
        views: {
          'home-tab': {
            templateUrl: "home.html",
            controller: 'HomeTabCtrl'
          }
        }
      })
      .state('tabs.facts', {
        url: "/facts",
        views: {
          'home-tab': {
            templateUrl: "facts.html"
          }
        }
      })
      .state('tabs.facts2', {
        url: "/facts2",
        views: {
          'home-tab': {
            templateUrl: "facts2.html"
          }
        }
      })
      .state('facts3',{
       url:"/facts3",
        templateUrl:"facts3.html"
      /*  views: {
          'home-tab': {
            templateUrl: "facts3.html"
          }
        }*/

      })
      .state('tabs.about', {
        url: "/about",
        views: {
          'about-tab': {
            templateUrl: "about.html"
          }
        }
      })
      .state('tabs.navstack', {
        url: "/navstack",
        views: {
          'about-tab': {
            templateUrl: "nav-stack.html"
          }
        }
      })
      .state('tabs.contact', {
        url: "/contact",
        views: {
          'contact-tab': {
            templateUrl: "contact.html"
          }
        }
      })
    ;


    $urlRouterProvider.otherwise("/tab/home");

  })
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
