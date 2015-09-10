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
        });
    }
})();