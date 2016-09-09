//ContentsCtrl
function ContentsCtrl(){
    navi.on('postpush', function(event){ //pushPage完了後に動作
        var param1 = null;  //変数の定義
        param1 = navi.topPage.pushedOptions.data.param1; //カテゴリを代入
        console.log(param1 + "がタップされました"); //値を受け取れたかの確認
    });
}

//コントローラの定義
angular
    .module('templateApp')
    .controller('ContentsCtrl', ContentsCtrl);