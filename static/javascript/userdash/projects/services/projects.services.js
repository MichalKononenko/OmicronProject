/**
 *
 */
(function(){
    'use strict';

    angular
        .module('userdashApp.projects.services')
        .factory('ProjectServ', ProjectServ);

    ProjectServ.$inject = ['$resource'];

    function ProjectServ($resource){
        return $resource('/api/projects/:id', {}, {
            get: {method: 'GET', params:{}, isArray:true},
            save: {method: 'POST'}
        }, {
            stripTrailingSlashes:false
        });
    }
})();