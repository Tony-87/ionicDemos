angular.module('WeChat.controllers', [])
  .controller('findCtrl', function ($scope, $state) {
    $scope.onSwipeLeft = function () {
      $state.go("tab.setting");
    };
    $scope.onSwipeRight = function () {
      $state.go("tab.friends");
    };
  })

  .controller('messageCtrl', function ($scope, $state,$ionicPopup,localStorageService,messageService) {

    // $scope.messages = messageService.getAllMessages();
    // console.log($scope.messages);
   $scope.onSwipeLeft = function () {
      $state.go("tab.friends");
    };
     $scope.popupMessageOpthins = function (messageIndex) {

      //$scope.popup.index = $scope.messages.indexOf(messageIndex);
      $scope.popup.index =messageIndex;


      $scope.popup.optionsPopup = $ionicPopup.show({
        templateUrl: "templates/popup.html",
        scope: $scope,
      });
      $scope.popup.isPopup = true;
    };
    $scope.markMessage = function () {
      var index = $scope.popup.index;
    //  alert(index)
      var message = $scope.messages[index];
      //alert(message.showHints);
      if (message.showHints) {
        message.showHints = false;
        message.noReadMessages = 0;
      } else {
        message.showHints = true;
        message.noReadMessages = 1;
      }
      $scope.popup.optionsPopup.close();
      $scope.popup.isPopup = false;
      messageService.updateMessage(message);
    };
    $scope.deleteMessage = function () {
      var index = $scope.popup.index;
      var message = $scope.messages[index];
      $scope.messages.splice(index, 1);
      $scope.popup.optionsPopup.close();
      $scope.popup.isPopup = false;
      messageService.deleteMessageId(message.id);
      messageService.clearMessage(message);
    };
    $scope.topMessage = function () {
      var index = $scope.popup.index;
      var message = $scope.messages[index];
      if (message.isTop) {
        message.isTop = 0;
      } else {
        message.isTop = new Date().getTime();
      }
      $scope.popup.optionsPopup.close();
      $scope.popup.isPopup = false;
      messageService.updateMessage(message);
    };
    $scope.messageDetils = function (message) {
      $state.go("messageDetail", {
        "messageId": message.id
      });
    };
    $scope.$on("$ionicView.beforeEnter", function () {
      // console.log($scope.messages);
      $scope.messages = messageService.getAllMessages();
      console.log(JSON.stringify($scope.messages));
      $scope.popup = {
        isPopup: false,
        index: 0
      };
    });

  })

  .controller('friendsCtrl', function ($scope, $state) {
    $scope.onSwipeLeft = function () {
      $state.go("tab.find");
    };
    $scope.onSwipeRight = function () {
      $state.go("tab.message");
    };
    $scope.contacts_right_bar_swipe = function (e) {
      console.log(e);
    };
  })

  .controller('settingCtrl', function ($scope, $state) {
    $scope.onSwipeRight = function () {
      $state.go("tab.find");
    };
  })

  .controller('messageDetailCtrl', ['$scope', '$stateParams',
    'messageService', '$ionicScrollDelegate', '$timeout',
    function ($scope, $stateParams, messageService, $ionicScrollDelegate, $timeout) {
      var viewScroll = $ionicScrollDelegate.$getByHandle('messageDetailsScroll');
      // console.log("enter");
      $scope.doRefresh = function () {
        // console.log("ok");
        $scope.messageNum += 5;
        $timeout(function () {
          $scope.messageDetils = messageService.getAmountMessageById($scope.messageNum,
            $stateParams.messageId);
          $scope.$broadcast('scroll.refreshComplete');
        }, 200);
      };

      $scope.$on("$ionicView.beforeEnter", function () {
        $scope.message = messageService.getMessageById($stateParams.messageId);
        $scope.message.noReadMessages = 0;
        $scope.message.showHints = false;
        messageService.updateMessage($scope.message);
        $scope.messageNum = 10;
        $scope.messageDetils = messageService.getAmountMessageById($scope.messageNum,
          $stateParams.messageId);
        $timeout(function () {
          viewScroll.scrollBottom();
        }, 0);
      });

      window.addEventListener("native.keyboardshow", function (e) {
        viewScroll.scrollBottom();
      });
    }
  ])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
