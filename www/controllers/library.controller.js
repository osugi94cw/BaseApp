function LibraryCtrl(){
    navi.on('postpush', function(event){
        var test = navi.topPage.data.param1;
        alert(test);

    })
}

angular
    .module('templateApp')
    .controller('LibraryCtrl', LibraryCtrl);