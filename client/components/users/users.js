import angular from 'angular';
import appLibraries from '../../app.libraries';

import usersRoutes from './users.config';
import usersComponent from './users.component';

let usersModule = angular.module('app.components.users', [])
   .config(usersRoutes)
   .component('users', usersComponent);

export default usersModule;