/**
 * Created by shahab on 15-09-08.
 */
(function(){
   'use strict';

    angular
        .module('userdashApp.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){
        $routeProvider.otherwise('/');
    }

})();