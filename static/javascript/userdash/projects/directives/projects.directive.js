/**
 * Created by shahab on 15-09-08.
 */
(function(){
    'use strict';

    angular
        .module('userdashApp.projects.directives')
        .directive('projects', projects);

    function projects(){
        return {
            restrict: 'E',
            templateUrl: 'template/projects.html'
        }
    }
})();