import angular from 'angular';
import appLibraries from './app.libraries';
import components from './components/components';

angular.module('app', [
      appLibraries.name,
      components.name
   ]);

angular.bootstrap(document, ['app'], {
   strictDi: true
});