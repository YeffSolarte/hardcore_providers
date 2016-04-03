import template from './users.html';

let usersComponent = {
   template,
   controller: 'UsersController',
   bindings: {
      items: '='
   }
};

export default angular.module('users.component', []).component('users', usersComponent);