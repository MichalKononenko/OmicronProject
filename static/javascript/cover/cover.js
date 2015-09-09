/**
 * Created by shahab on 15-09-05.
 */
(function(){

    angular
        .module('cover', [
            'cover.config',
            'cover.routes'
        ]);

    angular
        .module('cover.config', []);

    angular
        .module('cover.routes', ['ngRoute']);

    angular
        .module('cover')
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