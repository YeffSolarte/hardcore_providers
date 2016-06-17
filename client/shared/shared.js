import angular from 'angular';
import dragular from './dragular/dragular';

let sharedModule = angular.module('sharedModule', [
   dragular.name
]);

export default sharedModule;