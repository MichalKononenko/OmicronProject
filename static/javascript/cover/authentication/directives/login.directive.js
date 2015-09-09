/**
 * Created by shahab on 15-09-04.
 */
(function(){

    angular
        .module('cover.authentication.directives')
        .directive('login', login);

    function login(){
        return {
            restrict: 'E',
            templateUrl: '/static/javascript/cover/authentication/templates/login.html'
        }
    }
})();