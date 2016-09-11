/**
 * Created by admin on 2016/9/11.
 */

app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('app', {
      abstract:true,
      url:"/app",
      templateUrl:'app.html'
    })

    .state('app.tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('app.tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/tabs_home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('app.tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/tabs_facts.html"
        }
      }
    })
    .state('app.tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/tabs_facts2.html"
        }
      }
    })
    .state('app.facts3', {
      url: "/facts3",
      templateUrl: "templates/tabs_facts3.html"
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
          templateUrl: "templates/tabs_about.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });

  $urlRouterProvider.otherwise("/app/tab/home");

});
