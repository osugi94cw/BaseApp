function MenuCtrl(CommonService){
    
    this.menuTransition = function(argument){
        this.commonTransition = new CommonService();
        /*var options = {
            animation:'fade',
            param1:argument
        };
        navi.pushPage('views/html/library.html', options);*/
    }
    
}

angular
    .module('templateApp')
    .controller('MenuCtrl', MenuCtrl);
