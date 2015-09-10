/**
 * Created by shahab on 15-09-08.
 */
(function(){
   'use strict';

    angular
        .module('userdashApp.config')
        .config(config);

    config.$inject = ['$locationProvider', '$interpolateProvider', '$httpProvider'];

    function config($locationProvider, $interpolateProvider, $httpProvider){
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');

        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    }
})();