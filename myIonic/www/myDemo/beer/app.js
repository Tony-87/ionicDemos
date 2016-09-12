angular.module('ionicApp', ['ionic'])
  .config(function ($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position("bottom");
    $ionicConfigProvider.tabs.style('standard');
  })
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })
      .state('tabs.home', {
        url: "/home",
        views: {
          'home-tab': {
            templateUrl: "templates/home.html",
            controller: 'HomeTabCtrl'
          }
        }
      })
      .state('intro', {
        url: "/intro",
        templateUrl: "templates/intro/intro1.html",
        controller: 'IntroCtrl'
      })

      /*.state('tabs.facts', {
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
      })*/
    ;


    $urlRouterProvider.otherwise("/tab/home");

  })
  .controller('AboutCtrl', function ($scope, $ionicNavBarDelegate) {
    $scope.setNavTitle = function (title) {
      $ionicNavBarDelegate.setTitle(title);
    }
    $scope.aboutTab = 1;
  })
  .controller('HomeTabCtrl', function ($scope) {
    console.log('HomeTabCtrl');

  })
  .controller('IntroCtrl',function($scope,$ionicHistory, $state){
    $scope.goBack = function () {
      if ($ionicHistory.backView() == null) {
        $state.go("tabs.home");
      }
      else {
        $ionicHistory.goBack();
      }
    }
  })
;
