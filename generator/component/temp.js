import angular from 'angular';
import <%= name %>Component from './<%= dashCaseName %>.component';
import <%= upCaseName %>Service from './<%= dashCaseName %>.service';

let <%= name %>Module = angular.module('crm.<%= name %>', [])
  .component('<%= name %>', <%= name %>Component)
  .service('<%= upCaseName %>Service', <%= upCaseName %>Service);

export default <%= name %>Module;