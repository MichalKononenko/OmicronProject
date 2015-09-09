/**
 * Created by shahab on 15-09-05.
 */
(function(){
   'use strict';

    angular
        .module('cover.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){
        $routeProvider.otherwise('/');
    }

})();