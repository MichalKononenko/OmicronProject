/**
 * Created by shahab on 15-09-03.
 */
(function(){
   'use strict';

    angular
        .module('dashboard.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){
        $routeProvider.otherwise('/');
    }

})();