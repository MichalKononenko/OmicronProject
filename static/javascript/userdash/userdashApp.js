/**
 * Created by shahab on 15-09-08.
 */
(function () {
    'use strict';
    
    angular
        .module('userdashApp', [
            'userdashApp.config',
            'userdashApp.routes',
            'userdashApp.projects',
            'userdashApp.dash',
            'userdashApp.auth'
        ]);

    angular
        .module('userdashApp.config', []);

    angular
        .module('userdashApp.routes', ['ngRoute']);

    angular
        .module('userdashApp')
        .run(run);

  run.$inject = ['$http'];

  /**
   * @name run
   * @desc Update xsrf $http headers to align with Django's defaults
   */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
})();