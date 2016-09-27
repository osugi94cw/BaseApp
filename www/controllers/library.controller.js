ons.bootstrap('libraryModule', ['transitionModule']);


//LibraryCtrl
function LibraryCtrl(){
    navi.on('postpush', function(event){ //pushPage完了後に動作
        var param1 = null;  //変数の定義
        param1 = navi.topPage.pushedOptions.data.param1; //カテゴリを代入
        console.log(param1 + "がタップされました"); //値を受け取れたかの確認
    });
}

//ContentsListCtrl
function ContentsListCtrl(TransitionService){
    this.libTransition = function(argument){
        
        var target = 'views/html/contents.html'; //遷移先のファイルパス
        var category = argument; //コンテンツのカテゴリ
        this.screenTransition = new TransitionService(target, category); //サービスを呼び出す
        
    }
}

//コントローラーの定義
angular
    .module('libraryModule')
    .controller('LibraryCtrl', LibraryCtrl)
    .controller('ContentsListCtrl',['TransitionService', ContentsListCtrl]);