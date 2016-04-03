import template from './home.html';

let homeComponent = {
   template,
   controller: 'HomeController',
   bindings: {
      items: '='
   }
};

export default angular.module('home.component', []).controller('home', homeComponent);