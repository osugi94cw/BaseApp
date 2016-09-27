ons.bootstrap('libraryModule', ['transitionModule']);


//LibraryCtrl
function LibraryCtrl(){
    navi.on('postpush', function(event){ //pushPage完了後に動作
        var libraryId = navi.topPage.pushedOptions.data.param1; //パラメータを代入
        console.log(libraryId + "がタップされました"); //値を受け取れたかの確認
        document.querySelector("#myModal").show();
    });
}

//ContentsListCtrl
function ContentsListCtrl(TransitionService){
    this.libTransition = function(argument,argument2){
        var contentsType = argument;
        var contentsUrl = argument2;
        if(contentsType == 'movie'){
            var target = 'views/html/movie.contents.html'; //遷移先のファイルパス
        }
        else{
            var target = 'views/html/contents.html'; //遷移先のファイルパス
            this.screenTransition = new TransitionService(target, argument); //サービスを呼び出す
        }
  
    }
}

//コントローラーの定義
angular
    .module('libraryModule')
    .controller('LibraryCtrl', LibraryCtrl)
    .controller('ContentsListCtrl',['TransitionService', ContentsListCtrl]);