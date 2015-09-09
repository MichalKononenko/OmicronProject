/**
 * Created by shahab on 15-09-09.
 */
(function(){
    'use strict';

    angular
        .module('userdashApp.dash.controllers')
        .controller('DashController', DashController);

    DashController.$inject = ['$scope', 'ProjectServ'];

    function DashController($scope, ProjectServ){
        console.log('DashController');
        $scope.isOverview = true;
        $scope.isProjects = false;
        $scope.isNewProject = false;

        $scope.newproj = {};

        $scope.reset = function(){
            $scope.isOverview=false;
            $scope.isProjects=false;
            $scope.isNewProject=false;
        };

        $scope.getProj = function () {
            $scope.projects = ProjectServ.get();
        };

        $scope.saveProj = function(){
            console.log($scope.newproj.name);
           var newproj = new ProjectServ($scope.newproj);
            newproj.$save();
        };

        $scope.setVisible = function(view){
            $scope.reset();
            switch (view){
                default:
                    $scope.isOverview = true;
                    break;
                case 'project':
                    $scope.isProjects = true;
                    break;
                case 'newproj':
                    $scope.isNewProject = true;
                    break;
            }
        };
    }

})();