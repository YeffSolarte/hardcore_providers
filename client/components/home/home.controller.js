class HomeController {

   constructor(dragularService, $timeout, $element) {
      console.log('--- $element.children().children().eq(2) ---');
      console.dir($element.children().children().eq(2));

      this.items = [{
         items: [{
            content: 'Item a1'
         }, {
            content: 'Item a2'
         }, {
            content: 'Item a3'
         }, {
            content: 'Item a4'
         }]
      }, {
         items: [{
            content: 'Item b1'
         }, {
            content: 'Item b2'
         }, {
            content: 'Item b3'
         }, {
            content: 'Item b4'
         }]
      }, {
         items: [{
            content: 'Item c1'
         }, {
            content: 'Item c2'
         }, {
            content: 'Item c3'
         }, {
            content: 'Item c4'
         }]
      }];

      $timeout(() => { // timeout due to nested ngRepeat to be ready
         //var container = $element.children().eq(0).children(),
         var container = $element.children().children().eq(2),
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

      }, 0);

   }

}

HomeController.$inject = ['dragularService', '$timeout', '$element'];

export default HomeController;