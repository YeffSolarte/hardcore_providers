import template from './home.html';

let homeComponent = {
   template,
   controller: 'HomeController',
   bindings: {
      items: '='
   }
};

export default homeComponent;