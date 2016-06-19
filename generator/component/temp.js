import angular from 'angular';
import <%= name %>Component from './<%= name %>.component';
import <%= upCaseName %>BaseService from './<%= name %>.service';

let <%= name %>Module = angular.module('crm.<%= name %>', [])
  .component('<%= name %>', <%= name %>Component)
  .service('<%= upCaseName %>Controller', <%= upCaseName %>Controller);

export default <%= name %>Module;