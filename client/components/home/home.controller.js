class HomeController {

   constructor(dragularService, $timeout, $element, HomeService) {

      this.items = HomeService.getItems();

      $timeout(() => { // timeout due to nested ngRepeat to be ready
         //var container = $element.children().eq(0).children(),
         var container = $element.children().children().eq(2),
            parentContainers = container.children(),
            nestedContainers = [];

         console.log('--- container ---');
         console.dir(container);

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

   }

}

HomeController.$inject = ['dragularService', '$timeout', '$element', 'HomeService'];

export default HomeController;