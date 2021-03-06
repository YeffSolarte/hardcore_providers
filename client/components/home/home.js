import angular from 'angular';
import appLibraries from '../../app.libraries';

import homeRoutes from './home.config';
import homeComponent from './home.component';
import HomeService from './home.service';

import homeList from './home-list/home-list';

let homeModule = angular.module('app.components.home', [
      appLibraries.name,
      homeList.name
   ])
   .config(homeRoutes)
   .component('home', homeComponent)
   .service('HomeService', HomeService);

export default homeModule;