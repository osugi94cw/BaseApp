//ButtonCtrl
function ButtonCtrl(TransitionService){
    
    this.menuTransition = function(argument){
        
        var transitionTarget = 'views/html/library.html'; //遷移先のファイルパス
        
        var options={};
        options.data = {
            animation:'fade', //遷移アニメーション
            param1:argument //パラメータ
        };    
        this.screenTransition = new TransitionService(transitionTarget, options); //サービスのメソッドを呼び出す
    }
    
}
//コントローラーの定義
angular
    .module('templateApp')
    .controller('ButtonCtrl', ButtonCtrl);
