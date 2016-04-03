webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	      value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var homeModule = _angular2.default.module('home', [__webpack_require__(8).name, __webpack_require__(10).name]);

	exports.default = homeModule;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _home = __webpack_require__(9);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var homeComponent = {
	   template: _home2.default,
	   controller: 'HomeController',
	   bindings: {
	      items: '='
	   }
	};

	exports.default = angular.module('home.component', []).component('home', homeComponent);

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"Home\">\n   <div class=\"page-header\">\n      <h1>Learn AngularJs Providers <small>by using then excessively </small></h1>\n   </div>\n\n   <p>\n      By using providers we can make configurable stuff, dynamic logic, lazy loading.\n\n      So I want to make this 'app' with just providers to see what new things we can learn.\n\n   </p>\n</div>\n\n";

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	HomeController.$inject = [];

	function HomeController() {
	   'use strict';

	   var self = this;
	}

	exports.default = angular.module('home.controller', []).controller('HomeController', HomeController);

/***/ }
]);