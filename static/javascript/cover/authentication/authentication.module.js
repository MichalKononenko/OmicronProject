/**
 * Created by shahab on 15-09-04.
 */
(function(){

    angular
        .module('cover.authentication', [
            'cover.authentication.controllers',
            'cover.authentication.directives',
            'cover.authentication.services'
        ]);

    angular
        .module('cover.authentication.controllers', []);

    angular
        .module('cover.authentication.services', ['ngResource']);

    angular
        .module('cover.authentication.directives', []);

})();