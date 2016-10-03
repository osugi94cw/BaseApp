angular.module('connectionModule', []);

//ConnectionService
function ConnectionService(){
    
    //ネットワークの接続を確認
    var checkConnection = function() {
        var networkState = navigator.connection.type;
    
        var states = {};
        states[Connection.UNKNOWN]  = '接続先が不明の回線';
        states[Connection.ETHERNET] = 'イーサネット';
        states[Connection.WIFI]     = 'WiFi';
        states[Connection.CELL_2G]  = '2G';
        states[Connection.CELL_3G]  = '3G';
        states[Connection.CELL_4G]  = '4G';
        states[Connection.CELL]     = 'Generic Cell';
        states[Connection.NONE]     = 'No network connection';

        

        if(networkState == Connection.NONE){
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