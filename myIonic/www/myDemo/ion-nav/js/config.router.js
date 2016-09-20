/**
 * Created by admin on 2016/9/11.
 */

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/tabs/home");

  $stateProvider


    //简单页面切换
    .state('page1', {
      url: "/page1",
      templateUrl: 'templates/pages/page1.html'
    })
    .state('page2', {
      url: "/page2",
      templateUrl: 'templates/pages/page2.html'
    })
    .state('page3', {
      url: "/page3",
      templateUrl: 'templates/pages/page3.html'
    })

    //abstrac简单嵌套
    .state('parent', {
      url: "/parent",
      abstract: true,
      templateUrl: "templates/abstract/parent.html"
    })
    .state('parent.child', {
      url: "/child",
      views: {
        'viewParent': {
          templateUrl: "templates/abstract/child.html"
        }
      }
    })
    .state('parent.child2', {
      url: "/child2",
      views: {
        'viewParent': {
          templateUrl: "templates/abstract/child2.html"
        }
      }
    })
    .state('mother', {
      url: "/mother",
      abstract: true,
      templateUrl: "templates/abstract/mother.html"
    })
    .state('mother.girl', {
      url: "/girl",
      views: {
        'viewParent': {
          templateUrl: "templates/abstract/girl.html"
        }
      }
    })
    .state('mother.girl2', {
      url: "/girl2",
      views: {
        'viewParent': {
          templateUrl: "templates/abstract/girl2.html"
        }
      }
    })
    .state('uncle', {
      url: "/uncle",
      templateUrl: "templates/abstract/uncle.html"
    })

    //tabs
    .state('tabs', {
      url: "/tabs",
      abstract: true,
      templateUrl: "templates/tabs/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/tabs/tabs_home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/tabs/tabs_facts.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/tabs/tabs_facts2.html",
          controller: 'TabFact2Ctrl'
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/tabs/tabs_about.html",
          controller:'AboutCtrl'
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/tabs/tabs_nav-stack.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/tabs/tabs_contact.html"
        }
      }
    })
    .state('facts3', {
      url: "/facts3",
      templateUrl: "templates/tabs/facts3.html"
    })
    .state('tabs.list',{
      url:"/list",
      views:{
        'list-tab':{
          templateUrl: "templates/tabs/tabs_list.html",
          controller: 'ListCtrl'
        }
      }
    })
  /*  .state('tabs.list.shopitem.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })*/
    //card
    .state('card', {
      url: "/card",
      abstract: true,
      templateUrl: "templates/card/tabs.html"
    })
    .state('card.home', {
      url: "/home",
      views: {
        'home-card': {
          templateUrl: "templates/card/tabs_home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('card.facts', {
      url: "/facts",
      views: {
        'home-card': {
          templateUrl: "templates/card/tabs_facts.html"
        }
      }
    })
    .state('card.facts2', {
      url: "/facts2",
      views: {
        'home-card': {
          templateUrl: "templates/card/tabs_facts2.html"
        }
      }
    })
    .state('card.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/card/tabs_about.html"
        }
      }
    })
    .state('card.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/card/tabs_nav-stack.html"
        }
      }
    })
    .state('card.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/card/tabs_contact.html"
        }
      }
    })
    .state('facts4', {
      url: "/facts4",
      templateUrl: "templates/card/tabs_facts4.html"
    })
  ;


});
