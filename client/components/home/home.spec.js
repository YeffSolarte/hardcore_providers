import angular from 'angular';

import home from './home';

describe('component: home', () => {
   let component, scope, item, $componentController;

   beforeEach(window.module(home.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      item = {name: 'Jero'};
   }));

   it('should assign the name bindings to the item object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('home',
         null,
         {
            item: item
         }
      );
      expect(component.item.name).toBe('Jero');
   });

});