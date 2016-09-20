angular.module('ionicApp', ['ionic'])
  .config(function($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.otherwise("/index");

    $stateProvider
      .state('index', {
        url: "/index",
        views: {
          "viewA": { template: "index.viewA" },
          "viewB": { template: "index.viewB" }
        }
      })
      .state('route1', {
        url: "/route1",
        views: {
          "viewA": { template: "route1.viewA" },
          "viewB": { template: "route1.viewB" }
        }
      })
      .state('route2', {
        url: "/route2",
        views: {
          "viewB": { template: "route2.view111111" },
          "viewA": { template: "route2.viewB" }
        }
      })
  })

;
