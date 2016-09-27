angular.module('transitionModule', []);

//TransitionService
function TransitionService(){
    
    var screenTransition = function(argument1,argument2){
        var target = argument1; //遷移先
        var options = {
            animation:'fade',
            data:{ //オブジェクトの定義
                param1:argument2
            }
        };
        navi.pushPage(target, options); //pushPageメソッド
    };
    return screenTransition; 
}
//サービスの定義
angular
    .module('transitionModule')
    .service('TransitionService', TransitionService);