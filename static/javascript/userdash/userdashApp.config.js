/**
 * Created by shahab on 15-09-08.
 */
(function(){
   'use strict';

    angular
        .module('userdashApp.config')
        .config(config);

    config.$inject = ['$locationProvider', '$interpolateProvider'];

    function config($locationProvider, $interpolateProvider){
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
    }
})();