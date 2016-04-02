import template from './home.html';

let homeComponent = {
   template,
   controller: 'UsersController',
   bindings: {
      items: '='
   }
};

export default homeComponent;