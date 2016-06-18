import angular from 'angular';
import dragular from './dragular/dragular';

let sharedModule = angular.module('app.shared', [
   dragular.name
]);

export default sharedModule;