import angular from 'angular';

import home from './home';

describe('component: home', () => {
   let component, scope, hero, $componentController, $injector;


   beforeEach(window.module(home.name));

   beforeEach(inject(($rootScope, _$componentController_, _$injector_) => {
      $injector = _$injector_;
      element = $injector.get('$element');
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      hero = {name: 'Wolverine'};
   }));

   it('should assign the name bindings to the hero object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('home',
         null,
         {
            hero: hero,
            $element: element
         }
      );
      expect(component.hero.name).toBe('Wolverine');
   });

});