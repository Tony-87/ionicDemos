﻿angular.module('ionicApp', ['ionic'])


  .config(function($stateProvider, $urlRouterProvider,$locationProvider) {


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
      .state('tabs.test', {
      url: "/test",
      views: {
        'about-tab': {
          templateUrl: "test.html"
        }
      }
    });

    //$locationProvider.html5Mode(true);
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
;
