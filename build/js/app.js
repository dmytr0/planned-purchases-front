webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(13);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _app = __webpack_require__(2);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	new _app2.default();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone, $) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Purchases = __webpack_require__(6);
	
	var _Purchases2 = _interopRequireDefault(_Purchases);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var collectionMain = new _Purchases2.default.Collection();
	exports.default = Backbone.View.extend({
	    initialize: function initialize() {
	        this.listenTo(collectionMain, 'reset', this.render);
	
	        collectionMain.fetch({ reset: true });
	    },
	    render: function render() {
	        console.log("app main rendering...");
	
	        $('#app').empty();
	        var view = new _Purchases2.default.View({ collection: collectionMain });
	        var html = view.render().el;
	        $('#app').append(html);
	
	        return this;
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(5)))

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Purchases = __webpack_require__(7);
	
	var _Purchases2 = _interopRequireDefault(_Purchases);
	
	var _Purchases3 = __webpack_require__(12);
	
	var _Purchases4 = _interopRequireDefault(_Purchases3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { View: _Purchases4.default, Collection: _Purchases2.default };

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Purchase = __webpack_require__(8);
	
	var _Purchase2 = _interopRequireDefault(_Purchase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = Backbone.Collection.extend({
	    url: 'http://localhost:2505/purchases',
	    model: _Purchase2.default.Model,
	
	    parse: function parse(data) {
	        return data.content;
	    }
	
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Purchase = __webpack_require__(9);
	
	var _Purchase2 = _interopRequireDefault(_Purchase);
	
	var _Purchase3 = __webpack_require__(10);
	
	var _Purchase4 = _interopRequireDefault(_Purchase3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { View: _Purchase4.default, Model: _Purchase2.default };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Backbone.Model.extend({
	    idAttribute: "id",
	    defaults: {
	        amount: 0.00,
	        currency: "₴",
	        image: "",
	        name: "undefined",
	        description: "",
	        category: "default",
	        url: "urls",
	        priority: 3
	    }
	
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone, _) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var template = __webpack_require__(11);
	
	exports.default = Backbone.View.extend({
	    template: _.template(template),
	    events: {
	        'click .ppName': 'moreDetails'
	    },
	    initialize: function initialize() {
	        this.listenTo(this.model, 'change', this.render);
	    },
	
	
	    className: 'purchaseItem',
	
	    render: function render() {
	        var html = this.template(this.model.toJSON());
	        this.$el.html(html);
	        return this;
	    },
	    moreDetails: function moreDetails(e) {
	        console.log("More details");
	        console.log(this.$el);
	        this.$el.find(".ppDetails").slideToggle();
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(4)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<img class=\"ppImagePrev ppimg\" src=\"<%= image %>\">\r\n<h2 class=\"ppName\"><%= name %></h2>\r\n<p class=\"ppAmount\"><%= amount %><span> <%= currency %></span></p>\r\n<div class=\"ppDetails\">\r\n\r\n    <img class=\"ppImage ppimg\" src=\"<%= image %>\">\r\n    <p class=\"ppDescTitle\">Description:</p>\r\n    <p class=\"ppDesc\"><%= description %></p>\r\n    <p class=\"ppUrls\"><a href=\"<%= urls %>\" target=\"_blank\"><%= urls %></a></p>\r\n    <p class=\"ppPriority\">Priotity: <%= priority %></p>\r\n    <p class=\"ppCategory\">Category: <%= category %></p>\r\n\r\n</div>";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Purchase = __webpack_require__(8);
	
	var _Purchase2 = _interopRequireDefault(_Purchase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = Backbone.View.extend({
	    className: 'ppList',
	
	    render: function render() {
	        this.$el.empty();
	        this.collection.each(this.addOne, this);
	        return this;
	    },
	    addOne: function addOne(purchase) {
	        var purchase = new _Purchase2.default.View({ model: purchase });
	        var html = purchase.render().el;
	        this.$el.append(html);
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC9hcHAubW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAvYXBwLnZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1B1cmNoYXNlcy9QdXJjaGFzZXMuTW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9QdXJjaGFzZXMvUHVyY2hhc2VzLkNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1B1cmNoYXNlcy9QdXJjaGFzZS9QdXJjaGFzZS5Nb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1B1cmNoYXNlcy9QdXJjaGFzZS9QdXJjaGFzZS5Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUHVyY2hhc2VzL1B1cmNoYXNlL1B1cmNoYXNlLlZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1B1cmNoYXNlcy9QdXJjaGFzZS9wdXJjaGFzZS50bXBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1B1cmNoYXNlcy9QdXJjaGFzZXMuVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcyJdLCJuYW1lcyI6WyJjb2xsZWN0aW9uTWFpbiIsIkNvbGxlY3Rpb24iLCJCYWNrYm9uZSIsIlZpZXciLCJleHRlbmQiLCJpbml0aWFsaXplIiwibGlzdGVuVG8iLCJyZW5kZXIiLCJmZXRjaCIsInJlc2V0IiwiY29uc29sZSIsImxvZyIsIiQiLCJlbXB0eSIsInZpZXciLCJjb2xsZWN0aW9uIiwiaHRtbCIsImVsIiwiYXBwZW5kIiwidXJsIiwibW9kZWwiLCJNb2RlbCIsInBhcnNlIiwiZGF0YSIsImNvbnRlbnQiLCJpZEF0dHJpYnV0ZSIsImRlZmF1bHRzIiwiYW1vdW50IiwiY3VycmVuY3kiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwicHJpb3JpdHkiLCJ0ZW1wbGF0ZSIsInJlcXVpcmUiLCJfIiwiZXZlbnRzIiwiY2xhc3NOYW1lIiwidG9KU09OIiwiJGVsIiwibW9yZURldGFpbHMiLCJlIiwiZmluZCIsInNsaWRlVG9nZ2xlIiwiZWFjaCIsImFkZE9uZSIsInB1cmNoYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQSx5Qjs7Ozs7Ozs7QUNEQTs7Ozs7O0FBRUMsb0JBQUQsQzs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7OztBQUVBLEtBQUlBLGlCQUFpQixJQUFJLG9CQUFVQyxVQUFkLEVBQXJCO21CQUNlQyxTQUFTQyxJQUFULENBQWNDLE1BQWQsQ0FBcUI7QUFDaENDLGVBRGdDLHdCQUNuQjtBQUNULGNBQUtDLFFBQUwsQ0FBY04sY0FBZCxFQUE4QixPQUE5QixFQUF1QyxLQUFLTyxNQUE1Qzs7QUFFQVAsd0JBQWVRLEtBQWYsQ0FBcUIsRUFBQ0MsT0FBTyxJQUFSLEVBQXJCO0FBQ0EsTUFMNEI7QUFPaENGLFdBUGdDLG9CQU94QjtBQUNKRyxpQkFBUUMsR0FBUixDQUFZLHVCQUFaOztBQUVBQyxXQUFFLE1BQUYsRUFBVUMsS0FBVjtBQUNBLGFBQUlDLE9BQU8sSUFBSSxvQkFBVVgsSUFBZCxDQUFtQixFQUFFWSxZQUFZZixjQUFkLEVBQW5CLENBQVg7QUFDQSxhQUFJZ0IsT0FBT0YsS0FBS1AsTUFBTCxHQUFjVSxFQUF6QjtBQUNBTCxXQUFFLE1BQUYsRUFBVU0sTUFBVixDQUFpQkYsSUFBakI7O0FBRUEsZ0JBQU8sSUFBUDtBQUNIO0FBaEIrQixFQUFyQixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSGY7Ozs7QUFDQTs7Ozs7O21CQUVlLEVBQUNiLHlCQUFELEVBQU9GLCtCQUFQLEU7Ozs7Ozs7Ozs7OztBQ0hmOzs7Ozs7bUJBRWVDLFNBQVNELFVBQVQsQ0FBb0JHLE1BQXBCLENBQTJCO0FBQ3RDZSxVQUFLLGlDQURpQztBQUV0Q0MsWUFBTyxtQkFBU0MsS0FGc0I7O0FBSXRDQyxZQUFPLGVBQVVDLElBQVYsRUFBZ0I7QUFDbkIsZ0JBQU9BLEtBQUtDLE9BQVo7QUFDSDs7QUFOcUMsRUFBM0IsQzs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBQ0E7Ozs7OzttQkFFZSxFQUFDckIsd0JBQUQsRUFBT2tCLHlCQUFQLEU7Ozs7Ozs7Ozs7O21CQ0hBbkIsU0FBU21CLEtBQVQsQ0FBZWpCLE1BQWYsQ0FBc0I7QUFDakNxQixrQkFBYSxJQURvQjtBQUVqQ0MsZUFBVTtBQUNOQyxpQkFBUSxJQURGO0FBRU5DLG1CQUFTLEdBRkg7QUFHTkMsZ0JBQU8sRUFIRDtBQUlOQyxlQUFNLFdBSkE7QUFLTkMsc0JBQWEsRUFMUDtBQU1OQyxtQkFBVSxTQU5KO0FBT05iLGNBQUssTUFQQztBQVFOYyxtQkFBVTtBQVJKOztBQUZ1QixFQUF0QixDOzs7Ozs7Ozs7Ozs7QUNBZixLQUFJQyxXQUFXLG1CQUFBQyxDQUFRLEVBQVIsQ0FBZjs7bUJBRWVqQyxTQUFTQyxJQUFULENBQWNDLE1BQWQsQ0FBcUI7QUFDaEM4QixlQUFVRSxFQUFFRixRQUFGLENBQVdBLFFBQVgsQ0FEc0I7QUFFaENHLGFBQVE7QUFDSiwwQkFBaUI7QUFEYixNQUZ3QjtBQUtoQ2hDLGVBTGdDLHdCQUtuQjtBQUNULGNBQUtDLFFBQUwsQ0FBYyxLQUFLYyxLQUFuQixFQUEwQixRQUExQixFQUFvQyxLQUFLYixNQUF6QztBQUNILE1BUCtCOzs7QUFTaEMrQixnQkFBVyxjQVRxQjs7QUFXaEMvQixXQVhnQyxvQkFXeEI7QUFDSixhQUFJUyxPQUFPLEtBQUtrQixRQUFMLENBQWMsS0FBS2QsS0FBTCxDQUFXbUIsTUFBWCxFQUFkLENBQVg7QUFDQSxjQUFLQyxHQUFMLENBQVN4QixJQUFULENBQWNBLElBQWQ7QUFDQSxnQkFBTyxJQUFQO0FBQ0gsTUFmK0I7QUFnQmhDeUIsZ0JBaEJnQyx1QkFnQnBCQyxDQWhCb0IsRUFnQmpCO0FBQ1hoQyxpQkFBUUMsR0FBUixDQUFZLGNBQVo7QUFDQUQsaUJBQVFDLEdBQVIsQ0FBWSxLQUFLNkIsR0FBakI7QUFDQSxjQUFLQSxHQUFMLENBQVNHLElBQVQsQ0FBYyxZQUFkLEVBQTRCQyxXQUE1QjtBQUNIO0FBcEIrQixFQUFyQixDOzs7Ozs7O0FDRmYsMmxCOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O21CQUVlMUMsU0FBU0MsSUFBVCxDQUFjQyxNQUFkLENBQXFCO0FBQ2hDa0MsZ0JBQVcsUUFEcUI7O0FBR2hDL0IsYUFBUSxrQkFBVztBQUNmLGNBQUtpQyxHQUFMLENBQVMzQixLQUFUO0FBQ0EsY0FBS0UsVUFBTCxDQUFnQjhCLElBQWhCLENBQXFCLEtBQUtDLE1BQTFCLEVBQWtDLElBQWxDO0FBQ0EsZ0JBQU8sSUFBUDtBQUNILE1BUCtCO0FBUWhDQSxhQUFRLGdCQUFTQyxRQUFULEVBQW1CO0FBQ3ZCLGFBQUlBLFdBQVcsSUFBSSxtQkFBUzVDLElBQWIsQ0FBbUIsRUFBRWlCLE9BQU8yQixRQUFULEVBQW5CLENBQWY7QUFDQSxhQUFJL0IsT0FBTytCLFNBQVN4QyxNQUFULEdBQWtCVSxFQUE3QjtBQUNBLGNBQUt1QixHQUFMLENBQVN0QixNQUFULENBQWlCRixJQUFqQjtBQUNIO0FBWitCLEVBQXJCLEM7Ozs7Ozs7QUNGZiwwQyIsImZpbGUiOiJqcy9hcHAuanM/NDU3MzcyZDUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYXBwL2FwcC5tb2R1bGUnO1xyXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9pbmRleC5qcyIsImltcG9ydCBBcHBWaWV3IGZyb20gJy4vYXBwLnZpZXcnO1xyXG5cclxuKG5ldyBBcHBWaWV3KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2FwcC9hcHAubW9kdWxlLmpzIiwiaW1wb3J0IFB1cmNoYXNlcyBmcm9tICcuLi9QdXJjaGFzZXMvUHVyY2hhc2VzLk1vZHVsZSc7XHJcblxyXG5sZXQgY29sbGVjdGlvbk1haW4gPSBuZXcgUHVyY2hhc2VzLkNvbGxlY3Rpb24oKTtcclxuZXhwb3J0IGRlZmF1bHQgQmFja2JvbmUuVmlldy5leHRlbmQoe1xyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLmxpc3RlblRvKGNvbGxlY3Rpb25NYWluLCAncmVzZXQnLCB0aGlzLnJlbmRlcik7XHJcblxyXG4gICAgICAgIGNvbGxlY3Rpb25NYWluLmZldGNoKHtyZXNldDogdHJ1ZX0pO1xyXG4gICAgICAgfSxcclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFwcCBtYWluIHJlbmRlcmluZy4uLlwiKTtcclxuXHJcbiAgICAgICAgJCgnI2FwcCcpLmVtcHR5KCk7XHJcbiAgICAgICAgbGV0IHZpZXcgPSBuZXcgUHVyY2hhc2VzLlZpZXcoeyBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uTWFpbiB9KTtcclxuICAgICAgICBsZXQgaHRtbCA9IHZpZXcucmVuZGVyKCkuZWw7XHJcbiAgICAgICAgJCgnI2FwcCcpLmFwcGVuZChodG1sKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHAvYXBwLnZpZXcuanMiLCJpbXBvcnQgQ29sbGVjdGlvbiBmcm9tICcuL1B1cmNoYXNlcy5Db2xsZWN0aW9uJztcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi9QdXJjaGFzZXMuVmlldyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7VmlldywgQ29sbGVjdGlvbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1B1cmNoYXNlcy9QdXJjaGFzZXMuTW9kdWxlLmpzIiwiaW1wb3J0IFB1cmNoYXNlIGZyb20gJy4vUHVyY2hhc2UvUHVyY2hhc2UuTW9kdWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcclxuICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MjUwNS9wdXJjaGFzZXMnLFxyXG4gICAgbW9kZWw6IFB1cmNoYXNlLk1vZGVsLFxyXG5cclxuICAgIHBhcnNlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBkYXRhLmNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvUHVyY2hhc2VzL1B1cmNoYXNlcy5Db2xsZWN0aW9uLmpzIiwiaW1wb3J0IE1vZGVsIGZyb20gJy4vUHVyY2hhc2UuTW9kZWwnO1xyXG5pbXBvcnQgVmlldyBmcm9tICcuL1B1cmNoYXNlLlZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1ZpZXcsIE1vZGVsfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvUHVyY2hhc2VzL1B1cmNoYXNlL1B1cmNoYXNlLk1vZHVsZS5qcyIsImV4cG9ydCBkZWZhdWx0IEJhY2tib25lLk1vZGVsLmV4dGVuZCh7XHJcbiAgICBpZEF0dHJpYnV0ZTogXCJpZFwiLFxyXG4gICAgZGVmYXVsdHM6IHtcclxuICAgICAgICBhbW91bnQ6IDAuMDAsXHJcbiAgICAgICAgY3VycmVuY3k6XCLigrRcIixcclxuICAgICAgICBpbWFnZTogXCJcIixcclxuICAgICAgICBuYW1lOiBcInVuZGVmaW5lZFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcImRlZmF1bHRcIixcclxuICAgICAgICB1cmw6IFwidXJsc1wiLFxyXG4gICAgICAgIHByaW9yaXR5OiAzXHJcbiAgICB9XHJcblxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvUHVyY2hhc2VzL1B1cmNoYXNlL1B1cmNoYXNlLk1vZGVsLmpzIiwibGV0IHRlbXBsYXRlID0gcmVxdWlyZSgnaHRtbCEuL3B1cmNoYXNlLnRtcGwuaHRtbCcpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFja2JvbmUuVmlldy5leHRlbmQoe1xyXG4gICAgdGVtcGxhdGU6IF8udGVtcGxhdGUodGVtcGxhdGUpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgJ2NsaWNrIC5wcE5hbWUnOiAnbW9yZURldGFpbHMnXHJcbiAgICB9LFxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2UnLCB0aGlzLnJlbmRlcik7XHJcbiAgICB9LFxyXG5cclxuICAgIGNsYXNzTmFtZTogJ3B1cmNoYXNlSXRlbScsXHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IGh0bWwgPSB0aGlzLnRlbXBsYXRlKHRoaXMubW9kZWwudG9KU09OKCkpO1xyXG4gICAgICAgIHRoaXMuJGVsLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgbW9yZURldGFpbHMoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW9yZSBkZXRhaWxzXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJGVsKTtcclxuICAgICAgICB0aGlzLiRlbC5maW5kKFwiLnBwRGV0YWlsc1wiKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfVxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvUHVyY2hhc2VzL1B1cmNoYXNlL1B1cmNoYXNlLlZpZXcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGltZyBjbGFzcz1cXFwicHBJbWFnZVByZXYgcHBpbWdcXFwiIHNyYz1cXFwiPCU9IGltYWdlICU+XFxcIj5cXHJcXG48aDIgY2xhc3M9XFxcInBwTmFtZVxcXCI+PCU9IG5hbWUgJT48L2gyPlxcclxcbjxwIGNsYXNzPVxcXCJwcEFtb3VudFxcXCI+PCU9IGFtb3VudCAlPjxzcGFuPiA8JT0gY3VycmVuY3kgJT48L3NwYW4+PC9wPlxcclxcbjxkaXYgY2xhc3M9XFxcInBwRGV0YWlsc1xcXCI+XFxyXFxuXFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcInBwSW1hZ2UgcHBpbWdcXFwiIHNyYz1cXFwiPCU9IGltYWdlICU+XFxcIj5cXHJcXG4gICAgPHAgY2xhc3M9XFxcInBwRGVzY1RpdGxlXFxcIj5EZXNjcmlwdGlvbjo8L3A+XFxyXFxuICAgIDxwIGNsYXNzPVxcXCJwcERlc2NcXFwiPjwlPSBkZXNjcmlwdGlvbiAlPjwvcD5cXHJcXG4gICAgPHAgY2xhc3M9XFxcInBwVXJsc1xcXCI+PGEgaHJlZj1cXFwiPCU9IHVybHMgJT5cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48JT0gdXJscyAlPjwvYT48L3A+XFxyXFxuICAgIDxwIGNsYXNzPVxcXCJwcFByaW9yaXR5XFxcIj5QcmlvdGl0eTogPCU9IHByaW9yaXR5ICU+PC9wPlxcclxcbiAgICA8cCBjbGFzcz1cXFwicHBDYXRlZ29yeVxcXCI+Q2F0ZWdvcnk6IDwlPSBjYXRlZ29yeSAlPjwvcD5cXHJcXG5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHRtbC1sb2FkZXIhLi9zcmMvanMvUHVyY2hhc2VzL1B1cmNoYXNlL3B1cmNoYXNlLnRtcGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFB1cmNoYXNlIGZyb20gJy4vUHVyY2hhc2UvUHVyY2hhc2UuTW9kdWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tib25lLlZpZXcuZXh0ZW5kKHtcclxuICAgIGNsYXNzTmFtZTogJ3BwTGlzdCcsXHJcblxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLiRlbC5lbXB0eSgpO1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5lYWNoKHRoaXMuYWRkT25lLCB0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBhZGRPbmU6IGZ1bmN0aW9uKHB1cmNoYXNlKSB7XHJcbiAgICAgICAgdmFyIHB1cmNoYXNlID0gbmV3IFB1cmNoYXNlLlZpZXcgKHsgbW9kZWw6IHB1cmNoYXNlIH0pO1xyXG4gICAgICAgIGxldCBodG1sID0gcHVyY2hhc2UucmVuZGVyKCkuZWw7XHJcbiAgICAgICAgdGhpcy4kZWwuYXBwZW5kKCBodG1sICk7XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9QdXJjaGFzZXMvUHVyY2hhc2VzLlZpZXcuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nzcy9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=