//モジュールの定義
ons.bootstrap('menuModule', ['transitionModule']);

//LibraryButtonCtrl
function LibraryButtonCtrl(TransitionService){
    
    //ボタンタップで呼び出され、遷移先とパラメータを画面遷移サービスに引数として渡すメソッド
    this.menuTransition = function(argument){
        var target = 'views/html/library.html'; //遷移先のファイルパス
        var id = argument; //ライブラリーのID
        this.screenTransition = new TransitionService(target, id); //サービスを呼び出す
        
    }
    
}
//コントローラーの定義
angular
    .module('menuModule')
    .controller('LibraryButtonCtrl', ['TransitionService', LibraryButtonCtrl]);