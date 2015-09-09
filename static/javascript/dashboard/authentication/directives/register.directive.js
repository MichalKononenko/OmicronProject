/**
 * Created by shahab on 15-09-04.
 */
(function(){

    angular
        .module('cover.authentication.directives')
        .directive('register', register);

    function register(){
        return {
            restrict: 'E',
            templateUrl: '/static/javascript/cover/authentication/templates/register.html'
        }
    }
})();