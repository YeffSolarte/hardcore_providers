usersRoutes.$inject = ['$stateProvider', '$controllerProvider', '$provide'];

function usersRoutes($stateProvider, $controllerProvider, $provide) {
   'use strict';


   $stateProvider
      .state('users', {
         url: '/users',
         template: '<users></users>'
      });

}

export default angular.module('users.routes', []).config(usersRoutes);