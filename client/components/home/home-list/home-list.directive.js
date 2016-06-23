class HomeListDirective {
   
   constructor() {
      this.restrict = 'A';
   }
   
   link(scope, element, attrs) {
      
      let $injector = angular.element(element).injector(),
          $compile = $injector.get('$compile');

      let items  = scope.$eval(attrs.items);

      let template = `
         <div class='containerVertical'>
            <div ng-repeat="item in $ctrl.items" class='exampleRow'>
               <div class="row-handle">Row {{::$index}}</div>
               <div class="exampleRow exampleCell containerNested">
                  <div ng-repeat="item in item.items" class="exampleCell">{{item.content}}</div>
               </div>
            </div>
         </div>`;

      let el = $compile(template)(scope);

      element.append(el);
      
   }
   
}

HomeListDirective.$inject = [];

export default HomeListDirective;