/**
 * Created by shahab on 15-09-09.
 */
(function(){
    'use strict';

    angular
        .module('userdashApp.auth',[
            'userdashApp.auth.services',
            'userdashApp.auth.controllers'
        ]);

    angular
        .module('userdashApp.auth.services', ['ngResource']);

    angular
        .module('userdashApp.auth.controllers', []);
})();