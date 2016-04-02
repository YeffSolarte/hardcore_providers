usersRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$provide'];

function usersRoutes($stateProvider, $urlRouterProvider, $controllerProvider, $provide) {
   'use strict';

   $urlRouterProvider.otherwise('/');

   $controllerProvider.register('UsersController', UsersController);

   UsersController.$inject = ['data'];

   function UsersController(data) {

      let self = this;

      self.name = 'jero';
   }

   $stateProvider
      .state('users', {
         url: '/users',
         template: '<users></users>',
         resolve: {
            users:['$q', '$http', ($q, $http) => {
               return $q((resolve) => {
                  $http.get('server/users.json').then(({data}) => {
                     console.log('data');
                     console.log(data);
                     resolve(data);
                  }, error => {
                     console.log('error');
                     console.log(error);
                  });
               });
            }]
         }
      });

}

export default usersRoutes;