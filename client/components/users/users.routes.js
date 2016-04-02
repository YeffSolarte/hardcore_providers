usersRoutes.$inject = ['$stateProvider', '$controllerProvider'];

function usersRoutes($stateProvider, $controllerProvider) {
   'use strict';

   $controllerProvider.register('UsersController', UsersController);

   function UsersController() {
      let self = this;

      self.name = 'jero';
   }

   $stateProvider
      .state('users', {
         url: '/users',
         template: '<users></users>'
      });

}

export default usersRoutes;