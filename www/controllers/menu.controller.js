
//LibraryButtonCtrl
function LibraryButtonCtrl(TransitionService){
    
    this.menuTransition = function(argument){
        
        var target = 'views/html/library.html'; //遷移先のファイルパス
        var category = argument; //ライブラリーのカテゴリ
        this.screenTransition = new TransitionService(target, category); //サービスを呼び出す
        
    }
    
}
//コントローラーの定義
angular
    .module('templateApp')
    .controller('LibraryButtonCtrl', ['TransitionService', LibraryButtonCtrl]);