import angular from 'angular';
import uiRouter from 'angular-ui-router';
//import components from './components/components';

import oclazyload from 'oclazyload';

angular.module('app', [
      uiRouter,
      oclazyload,
      require('./components/home/home.routes').default.name
   ]);

angular.bootstrap(document, ['app'], {
   strictDi: true
});