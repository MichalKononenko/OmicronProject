/**
 * Created by shahab on 15-09-09.
 */
(function(){
    'use strict';

    angular
        .module('userdashApp.auth.controllers')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$scope','AuthService'];

    function AuthController($scope, AuthService){

        $scope.register = function(){
            var user = {};
            user.username = $scope.regUser;
            user.password = $scope.regPass;

            if (username && password){
                console.log('Checking Authentication');
                console.log('User:');
                console.log(user.username);
                console.log(user.password);
                var auth = new AuthService(user);
                auth.$save();
            } else {
                console.log('Error');
                console.log(user.username);
                console.log(user);
            }
        };
    }

})();