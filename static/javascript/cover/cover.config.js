/**
 * Created by shahab on 15-09-05.
 */
(function(){
   'use strict';

    angular
        .module('cover.config')
        .config(config);

    config.$inject = ['$locationProvider'];

    function config($locationProvider){
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }
})();