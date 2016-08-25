// This is a JavaScript file

var app = ons.bootstrap();

app.controller('ButtonController', function($scope) {
    $scope.test = function(){
        navi.pushPage('library.html');
    }
    
    $scope.alert = function() {
    ons.notification.alert({
      title: 'タイトル',
      messageHTML: 'test',
      buttonLabel: 'ok',
      callback: function(){
          //ボタンが押された時の処理
      }
    });
  }
})




