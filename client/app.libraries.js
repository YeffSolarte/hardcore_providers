import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyload';


let appLibrariesModule = angular.module('libraries', [
      uiRouter,
      ocLazyLoad
   ]);

export default appLibrariesModule;