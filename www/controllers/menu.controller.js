ons.bootstrap('menuModule', ['transitionModule']);

//LibraryButtonCtrl
function LibraryButtonCtrl(TransitionService){
    
    this.menuTransition = function(argument){
        
        var target = 'views/html/library.html'; //遷移先のファイルパス
        var id = argument; //ライブラリーのカテゴリ
        this.screenTransition = new TransitionService(target, id); //サービスを呼び出す
        
    }
    
}
//コントローラーの定義
angular
    .module('menuModule')
    .controller('LibraryButtonCtrl', ['TransitionService', LibraryButtonCtrl]);