function CommonService(){
    this.commonTransition = function(argument){
        alert(argument);
    };
    return commonTransition;
    
}

ons
    .bootstrap('templateApp')
    .factory('CommonService', CommonService);