import angular from 'angular';
import appLibraries from '../../app.libraries';

import homeRoutes from './home.config';
import homeComponent from './home.component';

let homeModule = angular.module('app.components.home', [])
   .config(homeRoutes)
   .component('home', homeComponent);

export default homeModule;