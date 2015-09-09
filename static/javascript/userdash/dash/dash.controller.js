/**
 * Created by shahab on 15-09-09.
 */
(function(){
    'use strict';

    angular
        .module('userdashApp.dash.controllers')
        .controller('DashController', DashController);

    DashController.$inject = ['$scope'];

    function DashController($scope){
        console.log('DashController');
        $scope.isOverview = true;
        $scope.isProjects = false;

        $scope.reset = function(){
            $scope.isOverview=false;
            $scope.isProjects=false;
        };

        $scope.setVisible = function(view){
            $scope.reset();
            switch (view){
                default:
                    $scope.isOverview = true;
                    break;
            }
        };
    }

})();