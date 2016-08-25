//TransitionService
function TransitionService(){
    
    var screenTransition = function(argument1,argument2){
        this.target = argument1; //遷移先
        this.options = argument2; //optionsオブジェクト
        navi.pushPage(this.target, this.options); //OnsenUI<ons-navigator>コンポーネントの画面遷移メソッド
    };
    return screenTransition;
    
}
//サービスの定義
angular
    .module('templateApp')
    .service('TransitionService', TransitionService);