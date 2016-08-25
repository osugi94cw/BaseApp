function MenuCtrl(){
    
    this.menuTransition = function(argument){

        var options = {
            animation:'fade',
            param1:argument
        };
        navi.pushPage('views/html/library.html', options);
    }
}

ons
    .bootstrap('templateApp')
    .controller('MenuCtrl', MenuCtrl);
