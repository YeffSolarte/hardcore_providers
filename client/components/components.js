import angular from 'angular';
import appLibraries from '../app.libraries';

import users from './users/users';
import home from './home/home';

let componentsModule = angular.module('components', [
      appLibraries.name,
      users.name,
      home.name
   ]);

export default componentsModule;