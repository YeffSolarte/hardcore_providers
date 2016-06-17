import angular from 'angular';
import shared from './shared/shared';
import uiRouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyload';

let appLibrariesModule = angular.module('libraries', [
      shared.name,
      uiRouter,
      ocLazyLoad
   ]);

export default appLibrariesModule;