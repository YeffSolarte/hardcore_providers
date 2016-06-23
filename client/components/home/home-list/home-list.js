import angular from 'angular';
import appLibraries from '../../../app.libraries';

import HomeList from './home-list.directive';

let homeListModule = angular.module('app.components.home-list', [
      appLibraries.name
   ])
   .directive('homeList', () => new HomeList());

export default homeListModule;