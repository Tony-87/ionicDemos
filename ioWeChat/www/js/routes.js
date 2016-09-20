/**
 * Created by admin on 2016/9/13.
 */
angular.module('WeChat.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/message');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state("tab", {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html",
    })
    .state('tab.message', {
      url: '/message',
      views: {
        'tab-message': {
          templateUrl: 'templates/tab-message.html',
          controller: "messageCtrl"
        }
      }
    })
    .state('messageDetail', {
      url: '/messageDetail/:messageId',
      templateUrl: "templates/message-detail.html",
      controller: "messageDetailCtrl"
    })
    .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: "friendsCtrl"
        }
      }
    })
    .state('tab.find', {
      url: '/find',
      views: {
        'tab-find': {
          templateUrl: 'templates/tab-find.html',
          controller: "findCtrl"
        }
      },
    })
    .state('tab.setting', {
      url: '/setting',
      views: {
        'tab-setting': {
          templateUrl: 'templates/tab-setting.html',
          controller: "settingCtrl"
        }
      }
    })

  ;

})
