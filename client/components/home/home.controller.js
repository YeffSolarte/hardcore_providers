class HomeController {

   constructor(dragularService, $timeout, HomeService) {

      this.items = HomeService.getItems();


   }

}

HomeController.$inject = ['dragularService', '$timeout', 'HomeService'];

export default HomeController;