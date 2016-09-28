angular.module('repeatFinishedModule', []);

// RepeatFinishedDirective
function repeatFinishedDirective($timeout){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            if (scope.$last === true){
                $timeout(function(){
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    }
}

//ディレクティブの定義
angular.module("repeatFinishedModule", [])
    .directive('repeatFinishedDirective', ['$timeout', repeatFinishedDirective]);
