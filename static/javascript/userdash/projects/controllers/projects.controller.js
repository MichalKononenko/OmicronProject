/**
 * Created by shahab on 15-09-08.
 */
(function(){
    'use strict';

    angular
        .module('userdashApp.projects.controllers')
        .controller('ProjectCtrl', ProjectCtrl);

    ProjectCtrl.$inject = ['$scope', 'ProjectServ'];

    function ProjectCtrl($scope, ProjectServ){
        console.log('ProjectCtrl');
    }
})();