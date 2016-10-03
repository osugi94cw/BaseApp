ons.bootstrap('contentsModule', ['repeatFinishedModule','connectionModule']);

//ContentsCtrl
function MovieContentsCtrl($scope,$sce,ConnectionService){
    var vm = this;
    // vm.checkConnection = new ConnectionService(); //サービスの呼び出し
    var param1 = navi.topPage.pushedOptions.data.param1; //カテゴリを代入
    console.log(param1 + "がタップされました"); //値を受け取れたかの確認
    vm.url = $sce.trustAsResourceUrl(param1);
    // vm.url = $sce.trustAs($sce.URL, param1);
    // vm.url = param1;
    // vm.trustAsResourceUrl = function(src) {
    //     return $sce.trustAsResourceUrl(src);
    // };
    
//     vm.checkConnection = function() {
//         var networkState = navigator.connection.type;
//     
//         var states = {};
//         states[Connection.UNKNOWN]  = '種類不明の回線';
//         states[Connection.ETHERNET] = 'イーサネット';
//         states[Connection.WIFI]     = 'WiFi';
//         states[Connection.CELL_2G]  = '2G';
//         states[Connection.CELL_3G]  = '3G';
//         states[Connection.CELL_4G]  = '4G';
//         states[Connection.CELL]     = 'Generic Cell';
//         states[Connection.NONE]     = 'No network connection';
// 
//         
// 
//         if(networkState == Connection.NONE){
//             ons.notification.alert({
//                 title: '',
//                 messageHTML: 'ネットワークに接続できません。接続を確認してください',
//                 buttonLabel: 'OK',
//                 callback: function(){
//                     navi.popPage({animation:'slide'});
//                 }
//             });
//         }
//         else{
//             ons.notification.alert({
//                 title: '',
//                 messageHTML: '現在は' + states[networkState] + 'に接続されています',
//                 buttonLabel: 'OK'
//             });
//         }
//     }
    
}

//コントローラの定義
angular
    .module('contentsModule')
    .controller('MovieContentsCtrl', ['$scope', '$sce', 'ConnectionService', MovieContentsCtrl])
    .config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://www.youtube.com/watch?v=8M8ChETpWRQ'
    ]);
  });