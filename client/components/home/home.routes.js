homeRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$provide'];

function homeRoutes($stateProvider, $urlRouterProvider, $controllerProvider, $provide) {
   'use strict';

   $urlRouterProvider.otherwise('/home');

   $stateProvider
      .state('home', {
         url: '/home',
         template: '<home></home>'
      });

}

export default angular.module('home.routes', []).config(homeRoutes);