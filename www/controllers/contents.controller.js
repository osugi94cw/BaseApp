ons.bootstrap('contentsModule', ['repeatFinishedModule']);

//ContentsCtrl
function ContentsCtrl($scope,$sce){
    var vm = this;
    var param1 = navi.topPage.pushedOptions.data.param1; //カテゴリを代入
    console.log(param1 + "がタップされました"); //値を受け取れたかの確認
    vm.url = $sce.trustAsResourceUrl(param1);
    
}

//コントローラの定義
angular
    .module('contentsModule')
    .controller('ContentsCtrl', ['$scope', '$sce', ContentsCtrl])
    .config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://www.youtube.com/watch?v=8M8ChETpWRQ'
    ]);
  });