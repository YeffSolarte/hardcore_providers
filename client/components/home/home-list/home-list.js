import angular from 'angular';
import appLibraries from '../../app.libraries';

import homeList from './home-list.directive'

let homeListModule = angular.module('app.components.home-list', [
      appLibraries.name
   ])
   .directive('homeList', homeList);

export default homeListModule;