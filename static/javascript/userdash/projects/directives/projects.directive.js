/**
 * Created by shahab on 15-09-08.
 */
(function(){
    'use strict';

    angular
        .module('userdashApp.projects.directives')
        .directive('projectsdir', projectsdir);

    function projectsdir(){
        return {
            restrict: 'E',
            templateUrl: 'template/projectsdir.html'
        }
    }
})();