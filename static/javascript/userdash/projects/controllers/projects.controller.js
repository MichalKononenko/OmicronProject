/**
 * Created by shahab on 15-09-08.
 */
(function(){
    'use strict';

    angular
        .module('userdashApp.projects.controllers')
        .controller('ProjectController', ProjectController);

    ProjectController.$inject = ['$scope', 'ProjService'];

    function ProjectController($scope, ProjectServ){
        console.log('ProjectController');
        $scope.projects = ProjService.get();
    }
})();