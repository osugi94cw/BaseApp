function CommonService(){
    var commonTransition = function(){
        this.testct = 500;
        alert(this.testct);
    };
    return commonTransition;
    
}

angular
    .module('templateApp')
    .service('CommonService', CommonService);