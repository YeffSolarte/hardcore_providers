import template from './home.html';
import controller from './home.controller';
import './home.css';

let homeComponent = {
   template,
   controller,
   bindings: {
      stuff: '<?'
   }
};

export default homeComponent;