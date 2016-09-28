

//GetLibDataService
function LibraryErrorService($q,$rootScope){

    var libraryDataAcquisition = function(argument){
        var libraryId = argument; //ライブラリーIDを格納
       
       //mBaaSのAPIキーの設定とSDKの初期化
        var ncmb = new NCMB("340609a9b5431d19c497beb72411339fb9bd524570d8de15486d6557d07970cehhhhhhhhhhhhhhhh","dda8edefd900294fcadc8d2914debad64dfb4aa7a26919e759a20e5cf3c5c609");
        
        //NCMB.DataStoreのサブクラスを生成
        //取得したデータの格納する配列を定義
        
        //libraryクラス
        var library = ncmb.DataStore("libraryerror");
        var libraryPictureUrl = [];
        var libraryOverview = [];
        
        //contentsListクラス
        var contentsList = ncmb.DataStore("contentsList");
        var contentsPictureUrl = [];
        var contentsName = [];
        var contentsType = [];
        var contentsUrl = [];
        
        //データの取得メソッド
        var libraryAcquisition = library.equalTo("libraryId", libraryId).order("createDate", true).fetchAll();
        var contentsListAcquisition = contentsList.equalTo("libraryId", libraryId).order("createDate", true).fetchAll();
        
        
        $q.all([libraryAcquisition, contentsListAcquisition])
        .then(function(results) {
            var data = {
                library,
                contentsList
            };
            var libraryAcquisitionResults = results[0];
            var contentsListAcquisitionResults = results[1];
            
            for (var i = 0; i < libraryAcquisitionResults.length; i++) {
                var object = libraryAcquisitionResults[i];
                
                libraryPictureUrl[i] = object.get("libraryPictureUrl");
                libraryOverview[i] = object.get("libraryOverview");
            }
            data.library = {
                libraryPictureUrl:libraryPictureUrl[0],
                libraryOverview:libraryOverview[0]
            };
            
            data.contentsList = [];
            
            for (var i = 0; i < contentsListAcquisitionResults.length; i++) {
                var object = contentsListAcquisitionResults[i];
                
                contentsPictureUrl[i] = object.get("contentsPictureUrl");
                contentsName[i] = object.get("contentsName");
                contentsType[i] = object.get("contentsType");
                contentsUrl[i] = object.get("contentsUrl");
                
                data.contentsList.push(
                    {
                        img: contentsPictureUrl[i],
                        name: contentsName[i],
                        type: contentsType[i],
                        url: contentsUrl[i]
                    }
                );

                
            }
            // data.conData = {
            //     contentsPicture:contentsPictureUrl,
            //     contentsHeadline:contentsName,
            //     contentsCategory:contentsType,
            //     contentsURL:contentsUrl
            // };
            $rootScope.$broadcast('libraryDataGot', data);
        })
        .catch(function(err){
            console.log(err);
            ons.notification.confirm({
                title: '',
                messageHTML: 'データの取得に失敗しました。再接続を行いますか。',
                buttonLabels: ['OK','キャンセル'],
                callback: function(arg){
                    if(arg == 0){
                        libraryDataAcquisition(libraryId);
                    }
                    else{
                        navi.popPage({animation:'slide'});
                    }
                }
            });
        });
    };
    return libraryDataAcquisition;
}
//サービスの定義
angular
    .module('dataAcquisitionModule')
    .service('LibraryErrorService', ['$q','$rootScope', LibraryErrorService]); 