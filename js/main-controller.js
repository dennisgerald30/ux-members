(function(){
    "use strict";
    var mainctrlfunc = function mainctrlfunc($http, $window) {
        var mainvm=this;
        $http.get('http://private-a73e-aquentuxsociety.apiary-mock.com/members').success(function (res) {

            mainvm.members = res;



        })
            .error(function (err) {
                console.log("Error " + err);
            });

        mainvm.currentmember=null;
        mainvm.changemember = function (i) {
            mainvm.currentmember = mainvm.members[i];
            mainvm.currentmemberid=i;
        }

    }

    angular.module('UX-members').controller('MainCtrl', ['$http', mainctrlfunc]);

})()