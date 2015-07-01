(function(){
    "use strict";
    angular.module("UX-members")
        .directive("dirFix",['$window',fixDirectiveFunc]);

    function fixDirectiveFunc($window){
        var win= angular.element($window);
        console.log('I am in');
        var Directive= {
            transclude: 'true',
            template: '<ng-transclude></ng-transclude>',

            link: function(scope,ele,attr){
                var offset=ele[0].offsetTop;

                console.log(ele[0]);
                win.on('scroll',function(e){

                    if($window.scrollY > offset) {
                        ele.addClass('fix');
                        ele.css({'top': $window.scrollY - offset + 'px'});
                    }
                    else
                    {
                        ele.removeClass('fix');
                        ele.css({'top':0});
                    }

                })
            }
        }
        return Directive;
    }


})()
