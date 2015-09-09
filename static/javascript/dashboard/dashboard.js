/**
 * Created by shahab on 15-09-03.
 */
(function () {
  'use strict';

  angular
    .module('dashboard', [
        'dashboard.config',
        'dashboard.routes'
      ]);

  angular
    .module('dashboard.config', []);

  angular
    .module('dashboard.routes', ['ngRoute']);

  angular
    .module('dashboard')
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
