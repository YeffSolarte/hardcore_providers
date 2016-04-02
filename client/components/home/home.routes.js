homeRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$provide'];

function homeRoutes($stateProvider, $urlRouterProvider, $controllerProvider, $provide) {
   'use strict';

   $urlRouterProvider.otherwise('/');

   $controllerProvider.register('HomeController', HomeController);

   HomeController.$inject = [];

   function HomeController() {

      let self = this;

      self.name = 'home';
   }

   $stateProvider
      .state('home', {
         url: '/home',
         template: '<home></home>'
      });

}

export default homeRoutes;