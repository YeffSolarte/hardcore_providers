import angular from 'angular';

let homeModule = angular.module('home', [
      require('./home.component').name,
      require('./home.controller').name
   ]);

export default homeModule;