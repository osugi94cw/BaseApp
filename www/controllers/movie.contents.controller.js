ons.bootstrap('contentsModule', ['repeatFinishedModule']);

//ContentsCtrl
function MovieContentsCtrl($scope,$sce){
    var vm = this;
    var param1 = navi.topPage.pushedOptions.data.param1; //カテゴリを代入
    console.log(param1 + "がタップされました"); //値を受け取れたかの確認
    // vm.url = $sce.trustAsResourceUrl(param1);
    vm.url = "https://www.youtube.com/watch?v=8M8ChETpWRQ";
    
}

//コントローラの定義
angular
    .module('contentsModule')
    .controller('MovieContentsCtrl', ['$scope', '$sce', MovieContentsCtrl])
    .config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://www.youtube.com/watch?v=8M8ChETpWRQ'
    ]);
  });