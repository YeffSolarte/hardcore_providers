class HomeService {

   getItems() {
      return [{
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
   }

}

HomeService.$inject = [];

export default HomeService;