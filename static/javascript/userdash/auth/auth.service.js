/**
 * Created by shahab on 15-09-09.
 */
(function(){
    'use strict';

    angular
        .module('userdashApp.auth.services')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$resource'];

    function AuthService($resource){
        return $resource('/api/', {}, {
            register: {method: 'POST'}
        }, {
            stripTrailingSlashes:false
        }).then(
        function(response){
            //success callback
            var token = response.data.token;
            var username = response.data.username;

            if(token && username){
                $window.localStorage.token = token;
                $window.localStorage.username = username;
            }
        },
        function(response){
            //error callback
        });
    }
})();