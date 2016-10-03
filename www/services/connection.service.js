//モジュールの定義
angular.module('connectionModule', []);

//ConnectionService
function ConnectionService(){
    
    //ネットワークの接続を確認するメソッド
    var checkConnection = function() {
        var networkState = navigator.connection.type;

        if(networkState == Connection.NONE){    //ネットワークに繋がっていないときアラートを表示
            ons.notification.alert({
                title: '',
                messageHTML: 'ネットワークに接続できません。接続を確認してください',
                buttonLabel: 'OK',
                callback: function(){
                    navi.popPage({animation:'slide'});
                }
            });
        }
    }
    return checkConnection; 
}
//サービスの定義
angular
    .module('connectionModule')
    .service('ConnectionService', ConnectionService);