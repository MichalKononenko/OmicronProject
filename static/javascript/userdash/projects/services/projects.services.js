/**
 *
 */
(function(){
    'use strict';

    angular
        .module('userdashApp.projects.services')
        .factory('ProjService', ProjService);

    ProjService.$inject = ['$resource'];

    function ProjService($resource){
        return $resource('/api/projects/:id', {}, {
            get: {method: 'GET', isArray:true},
            save: {method: 'POST'}
        }, {
            stripTrailingSlashes:false
        });
    }
})();