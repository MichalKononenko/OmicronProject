/**
 * Created by shahab on 15-09-03.
 */
(function(){
   'use strict';

    angular
        .module('dashboard.config')
        .config(config);

    config.$inject = ['$locationProvider'];

    function config($locationProvider){
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }
})();