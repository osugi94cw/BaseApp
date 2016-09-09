//TransitionService
function TransitionService(){
    
    var screenTransition = function(argument1,argument2){
        var target = argument1; //遷移先
        var options = {
            animation:'fade',
            data:{ //オブジェクトの定義
                param1:argument2 //カテゴリ
            }
        };
        navi.pushPage(target, options); //pushPageメソッドの呼び出し
    };
    return screenTransition; 
}
//サービスの定義
angular
    .module('templateApp')
    .service('TransitionService', TransitionService);