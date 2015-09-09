/**
 * Created by shahab on 15-09-08.
 */
(function(){
   'use strict';

    angular
        .module('userdashApp.config')
        .config(config);

    config.$inject = ['$locationProvider'];

    function config($locationProvider){
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }
})();