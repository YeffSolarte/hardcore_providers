
class HomeListDirective {
   
   constructor(dragularService) {
      this.scope = {};
      this.restrict = 'A';
   }
   
   link(scope, element, attrs) {
      
      let template =  `
         <div class='containerVertical'>
            <div ng-repeat="item in $ctrl.items" class='exampleRow'>
               <div class="row-handle">Row {{::$index}}</div>
               <div class="exampleRow exampleCell containerNested">
                  <div ng-repeat="item in item.items" class="exampleCell">{{item.content}}</div>
               </div>
            </div>
         </div>`;

      element.append(template);
      
   }
   
}

HomeListDirective.$inject = ['dragularService'];

export default HomeListDirective;