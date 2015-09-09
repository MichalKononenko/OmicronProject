/**
 * Created by shahab on 15-09-08.
 */
(function(){
    'use strict';
    angular
        .module('userdashApp.projects',[
            'userdashApp.projects.services',
            'userdashApp.projects.controllers',
            'userdashApp.projects.directives'
        ]);

    angular
        .module('userdashApp.projects.services', ['ngResource']);

    angular
        .module('userdashApp.projects.controllers', []);

    angular
        .module('userdashApp.projects.directives', []);
})();