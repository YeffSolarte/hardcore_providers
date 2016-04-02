usersRoutes.$inject = ['$stateProvider'];

function usersRoutes($stateProvider) {

   $stateProvider
      .state('users', {
         url: '/users',
         template: '<users></users>'
      });

}

export default usersRoutes;