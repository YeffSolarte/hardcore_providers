import angular from 'angular';
import appLibraries from '../../app.libraries';

import homeRoutes from './home.routes';
import homeComponent from './home.component';

let homeModule = angular.module('home', [])
   .config(homeRoutes)
   .component('home', homeComponent);

export default homeModule;