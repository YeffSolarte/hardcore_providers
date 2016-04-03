import angular from 'angular';

let usersModule = angular.module('users', [
      require('./users.component').name,
      require('./users.controller').name
   ]);

export default usersModule;