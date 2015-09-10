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
        var csrf = '{{ csrf_token }}';
        return $resource('/api/authtoken/', {}, {
            register: {method: 'POST', headers: {'X-CSRFToken' : csrf}},
            get: {method: 'GET', headers: {'X-CSRFToken' : csrf}}
        }, {
            stripTrailingSlashes:false
        });
    }
})();