import angular from 'angular';
import dragularService from './dragular.service.js';
import dragularDirective from './dragular.directive.js';

let dragularModule = angular.module('dragularModule', [])
   .directive('dragular', dragularDirective)
   .factory('dragularService', dragularService);

export default dragularModule;