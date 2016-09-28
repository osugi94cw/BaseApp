ons.bootstrap('libraryModule', ['transitionModule','dataAcquisitionModule']);


//LibraryCtrl
function LibraryCtrl(LibraryDataAcquisitionService,$scope,LibraryErrorService,ContentsErrorService){
    var vm = this; //this コンテキストを、ViewModel を意味する vm として保持する
    var libraryId = navi.topPage.pushedOptions.data.param1; //受け取ったパラメータを代入
    console.log(libraryId + "がタップされました"); //値を受け取れたかの確認
    document.querySelector("#myModal").show(); //インジケータを表示
    
    if(libraryId == "L006"){
        vm.libraryDataAcquisition = new LibraryErrorService(libraryId); //サービスの呼び出し
    }
    else if(libraryId == "L007"){
        vm.libraryDataAcquisition = new ContentsErrorService(libraryId); //サービスの呼び出し
    }
    else{
        vm.libraryDataAcquisition = new LibraryDataAcquisitionService(libraryId); //サービスの呼び出し
    }
    
    
    //データの取得が終了したイベントを受け取る
    $scope.$on('libraryDataGot', function(event, data) {
        
        //サービスから受け取ったデータを変数またはオブジェクトに格納する
        
        //ライブラリー概要
        vm.libraryPicture = data.library.libraryPictureUrl;
        vm.libraryOverview = data.library.libraryOverview;
        
        //コンテンツリスト
        $scope.contentsList = [];   //vm.contentsListでは動作しなかった（要調査）
        $scope.contentsList = data.contentsList;
        
        //データが登録されていない場合
        
        //コンテンツリストのデータが登録されていない場合
        if($scope.contentsList.length == 0){
            document.querySelector("#myModal").hide();
            vm.contentsDataNone = "データが登録されていません。";
        }
        //タイトル画像のデータが登録されていない場合
        if(vm.libraryPicture == undefined){
            vm.libraryPicture="views/img/library/library_top_data-none.png";
        }
        //概要のデータが登録されていない場合
        if(vm.libraryOverview == undefined){
            vm.libraryOverview = "データが登録されていません。";
        }
    });
    
    //ng-repeatが終了したイベントを受け取る
    $scope.$on('ngRepeatFinished', function(event) {
        //インジケータを非表示にする
        document.querySelector("#myModal").hide();
    });
    
    //ネットワークの接続を確認
    //...
    
    

}

//ContentsListCtrl
function ContentsListCtrl(TransitionService){
    var vm = this;
    this.libTransition = function(argument,argument2){
        var contentsType = argument;
        var contentsUrl = argument2;
        if(contentsType == 'movie'){
            var target = 'views/html/movie.contents.html'; //遷移先のファイルパス
            vm.screenTransition = new TransitionService(target, contentsUrl); //サービスを呼び出す
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
    .controller('LibraryCtrl', ['LibraryDataAcquisitionService','$scope','LibraryErrorService','ContentsErrorService', LibraryCtrl])
    .controller('ContentsListCtrl',['TransitionService', ContentsListCtrl]);