import angular from 'angular';
import appLibraries from '../app.libraries';

import users from './users/users';

let componentsModule = angular.module('components', [
      appLibraries.name,
      users.name
   ]);

export default componentsModule;