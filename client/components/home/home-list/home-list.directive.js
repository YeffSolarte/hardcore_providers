class HomeListDirective {
   
   constructor() {
      this.restrict = 'A';
   }
   
   link(scope, element, attrs) {
      
      let $injector = angular.element(element).injector(),
         $compile = $injector.get('$compile'),
         $timeout = $injector.get('$timeout'),
         dragularService = $injector.get('dragularService');

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

      console.log('--- el ---');
      console.dir(el);

      $timeout(() => { // timeout due to nested ngRepeat to be ready

         //var container = element.children().eq(2),
         var container = el,
            parentContainers = container.children(),
            nestedContainers = [];

         dragularService(container, {
            moves: (el, container, handle) => {
               return handle.classList.contains('row-handle');
            },
            containersModel: this.items,
            nameSpace: 'rows'
         });

         // collect nested contianers
         for (var i = 0; i < parentContainers.length; i++) {
            console.log('--- parentContainers.eq(i).children()[1] ---');
            console.log('--- parentContainers.eq(i).children()[1] ---');
            console.log(parentContainers.eq(i).children()[1]);
            nestedContainers.push(parentContainers.eq(i).children()[1]);
         }

         dragularService(nestedContainers, {
            moves: (el, container, handle) => {
               return !handle.classList.contains('row-handle');
            },
            containersModel: (() => {
               var parent = this.items,
                  containersModel = [];
               for (var i = 0; i < parent.length; i++) {
                  containersModel.push(parent[i].items);
               }
               return containersModel;
            })(),
            nameSpace: 'cells'
         });

      }, 10);

      element.append(el);
      
   }
   
}

HomeListDirective.$inject = [];

export default HomeListDirective;