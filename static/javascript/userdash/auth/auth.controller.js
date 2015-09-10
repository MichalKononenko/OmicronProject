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
            var new_user = {};
            new_user.username = $scope.regUser;
            new_user.password = $scope.regPass;

            if (new_user.username && new_user.password){
                console.log('Checking Authentication');
                console.log('User:');
                console.log(new_user.username);
                console.log(new_user.password);
                var auth = new AuthService(new_user);
                auth.$register();
            } else {
                console.log('Error');
                console.log(new_user.username);
                console.log(new_user);
            }
        };

        $scope.login = function(){
            var login_user = {};
            login_user.username = $scope.loginUser;
            login_user.password = $scope.loginPass;

            if(username && password){
                console.log('Logging in');
                var auth = new AuthService(login_user);
                auth.login();

            } else {
                console.log('Tried but failed');
            }
        };

        $scope.logout = function(){

        };
    }

})();