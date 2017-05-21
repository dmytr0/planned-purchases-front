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
	        'click .purchaseItem': 'moreDetails'
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
	        this.$el.find("ppDetails").slideToggle();
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(4)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<img class=\"ppImagePrev ppimg\" src=\"<%= image %>\">\r\n<h3 class=\"ppName\"><%= name %></h3>\r\n<p class=\"ppAmount\"><%= amount %></p>\r\n<div class=\"ppDetails\">\r\n\r\n    <img class=\"ppImage ppimg\" src=\"<%= image %>\">\r\n    <p class=\"ppDesc\"><%= description %></p>\r\n    <p class=\"ppUrls\"><%= urls %></p>\r\n    <p class=\"ppPriority\"><%= priority %></p>\r\n    <p class=\"ppCategory\"><%= category %></p>\r\n\r\n</div>";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC9hcHAubW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAvYXBwLnZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1B1cmNoYXNlcy9QdXJjaGFzZXMuTW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9QdXJjaGFzZXMvUHVyY2hhc2VzLkNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1B1cmNoYXNlcy9QdXJjaGFzZS9QdXJjaGFzZS5Nb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1B1cmNoYXNlcy9QdXJjaGFzZS9QdXJjaGFzZS5Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUHVyY2hhc2VzL1B1cmNoYXNlL1B1cmNoYXNlLlZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1B1cmNoYXNlcy9QdXJjaGFzZS9wdXJjaGFzZS50bXBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1B1cmNoYXNlcy9QdXJjaGFzZXMuVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcyJdLCJuYW1lcyI6WyJjb2xsZWN0aW9uTWFpbiIsIkNvbGxlY3Rpb24iLCJCYWNrYm9uZSIsIlZpZXciLCJleHRlbmQiLCJpbml0aWFsaXplIiwibGlzdGVuVG8iLCJyZW5kZXIiLCJmZXRjaCIsInJlc2V0IiwiY29uc29sZSIsImxvZyIsIiQiLCJlbXB0eSIsInZpZXciLCJjb2xsZWN0aW9uIiwiaHRtbCIsImVsIiwiYXBwZW5kIiwidXJsIiwibW9kZWwiLCJNb2RlbCIsInBhcnNlIiwiZGF0YSIsImNvbnRlbnQiLCJpZEF0dHJpYnV0ZSIsImRlZmF1bHRzIiwiYW1vdW50IiwiY3VycmVuY3kiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwicHJpb3JpdHkiLCJ0ZW1wbGF0ZSIsInJlcXVpcmUiLCJfIiwiZXZlbnRzIiwiY2xhc3NOYW1lIiwidG9KU09OIiwiJGVsIiwibW9yZURldGFpbHMiLCJlIiwiZmluZCIsInNsaWRlVG9nZ2xlIiwiZWFjaCIsImFkZE9uZSIsInB1cmNoYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQSx5Qjs7Ozs7Ozs7QUNEQTs7Ozs7O0FBRUMsb0JBQUQsQzs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7OztBQUVBLEtBQUlBLGlCQUFpQixJQUFJLG9CQUFVQyxVQUFkLEVBQXJCO21CQUNlQyxTQUFTQyxJQUFULENBQWNDLE1BQWQsQ0FBcUI7QUFDaENDLGVBRGdDLHdCQUNuQjtBQUNULGNBQUtDLFFBQUwsQ0FBY04sY0FBZCxFQUE4QixPQUE5QixFQUF1QyxLQUFLTyxNQUE1Qzs7QUFFQVAsd0JBQWVRLEtBQWYsQ0FBcUIsRUFBQ0MsT0FBTyxJQUFSLEVBQXJCO0FBQ0EsTUFMNEI7QUFPaENGLFdBUGdDLG9CQU94QjtBQUNKRyxpQkFBUUMsR0FBUixDQUFZLHVCQUFaOztBQUVBQyxXQUFFLE1BQUYsRUFBVUMsS0FBVjtBQUNBLGFBQUlDLE9BQU8sSUFBSSxvQkFBVVgsSUFBZCxDQUFtQixFQUFFWSxZQUFZZixjQUFkLEVBQW5CLENBQVg7QUFDQSxhQUFJZ0IsT0FBT0YsS0FBS1AsTUFBTCxHQUFjVSxFQUF6QjtBQUNBTCxXQUFFLE1BQUYsRUFBVU0sTUFBVixDQUFpQkYsSUFBakI7O0FBRUEsZ0JBQU8sSUFBUDtBQUNIO0FBaEIrQixFQUFyQixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSGY7Ozs7QUFDQTs7Ozs7O21CQUVlLEVBQUNiLHlCQUFELEVBQU9GLCtCQUFQLEU7Ozs7Ozs7Ozs7OztBQ0hmOzs7Ozs7bUJBRWVDLFNBQVNELFVBQVQsQ0FBb0JHLE1BQXBCLENBQTJCO0FBQ3RDZSxVQUFLLGlDQURpQztBQUV0Q0MsWUFBTyxtQkFBU0MsS0FGc0I7O0FBSXRDQyxZQUFPLGVBQVVDLElBQVYsRUFBZ0I7QUFDbkIsZ0JBQU9BLEtBQUtDLE9BQVo7QUFDSDs7QUFOcUMsRUFBM0IsQzs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBQ0E7Ozs7OzttQkFFZSxFQUFDckIsd0JBQUQsRUFBT2tCLHlCQUFQLEU7Ozs7Ozs7Ozs7O21CQ0hBbkIsU0FBU21CLEtBQVQsQ0FBZWpCLE1BQWYsQ0FBc0I7QUFDakNxQixrQkFBYSxJQURvQjtBQUVqQ0MsZUFBVTtBQUNOQyxpQkFBUSxJQURGO0FBRU5DLG1CQUFTLEdBRkg7QUFHTkMsZ0JBQU8sRUFIRDtBQUlOQyxlQUFNLFdBSkE7QUFLTkMsc0JBQWEsRUFMUDtBQU1OQyxtQkFBVSxTQU5KO0FBT05iLGNBQUssTUFQQztBQVFOYyxtQkFBVTtBQVJKOztBQUZ1QixFQUF0QixDOzs7Ozs7Ozs7Ozs7QUNBZixLQUFJQyxXQUFXLG1CQUFBQyxDQUFRLEVBQVIsQ0FBZjs7bUJBRWVqQyxTQUFTQyxJQUFULENBQWNDLE1BQWQsQ0FBcUI7QUFDaEM4QixlQUFVRSxFQUFFRixRQUFGLENBQVdBLFFBQVgsQ0FEc0I7QUFFaENHLGFBQVE7QUFDSixnQ0FBdUI7QUFEbkIsTUFGd0I7QUFLaENoQyxlQUxnQyx3QkFLbkI7QUFDVCxjQUFLQyxRQUFMLENBQWMsS0FBS2MsS0FBbkIsRUFBMEIsUUFBMUIsRUFBb0MsS0FBS2IsTUFBekM7QUFDSCxNQVArQjs7O0FBU2hDK0IsZ0JBQVcsY0FUcUI7O0FBV2hDL0IsV0FYZ0Msb0JBV3hCO0FBQ0osYUFBSVMsT0FBTyxLQUFLa0IsUUFBTCxDQUFjLEtBQUtkLEtBQUwsQ0FBV21CLE1BQVgsRUFBZCxDQUFYO0FBQ0EsY0FBS0MsR0FBTCxDQUFTeEIsSUFBVCxDQUFjQSxJQUFkO0FBQ0EsZ0JBQU8sSUFBUDtBQUNILE1BZitCO0FBZ0JoQ3lCLGdCQWhCZ0MsdUJBZ0JwQkMsQ0FoQm9CLEVBZ0JqQjtBQUNYLGNBQUtGLEdBQUwsQ0FBU0csSUFBVCxDQUFjLFdBQWQsRUFBMkJDLFdBQTNCO0FBQ0g7QUFsQitCLEVBQXJCLEM7Ozs7Ozs7QUNGZiwyYzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OzttQkFFZTFDLFNBQVNDLElBQVQsQ0FBY0MsTUFBZCxDQUFxQjtBQUNoQ2tDLGdCQUFXLFFBRHFCOztBQUdoQy9CLGFBQVEsa0JBQVc7QUFDZixjQUFLaUMsR0FBTCxDQUFTM0IsS0FBVDtBQUNBLGNBQUtFLFVBQUwsQ0FBZ0I4QixJQUFoQixDQUFxQixLQUFLQyxNQUExQixFQUFrQyxJQUFsQztBQUNBLGdCQUFPLElBQVA7QUFDSCxNQVArQjtBQVFoQ0EsYUFBUSxnQkFBU0MsUUFBVCxFQUFtQjtBQUN2QixhQUFJQSxXQUFXLElBQUksbUJBQVM1QyxJQUFiLENBQW1CLEVBQUVpQixPQUFPMkIsUUFBVCxFQUFuQixDQUFmO0FBQ0EsYUFBSS9CLE9BQU8rQixTQUFTeEMsTUFBVCxHQUFrQlUsRUFBN0I7QUFDQSxjQUFLdUIsR0FBTCxDQUFTdEIsTUFBVCxDQUFpQkYsSUFBakI7QUFDSDtBQVorQixFQUFyQixDOzs7Ozs7O0FDRmYsMEMiLCJmaWxlIjoianMvYXBwLmpzPzg1YTg1M2VhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2FwcC9hcHAubW9kdWxlJztcclxuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJ1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaW5kZXguanMiLCJpbXBvcnQgQXBwVmlldyBmcm9tICcuL2FwcC52aWV3JztcclxuXHJcbihuZXcgQXBwVmlldyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHAvYXBwLm1vZHVsZS5qcyIsImltcG9ydCBQdXJjaGFzZXMgZnJvbSAnLi4vUHVyY2hhc2VzL1B1cmNoYXNlcy5Nb2R1bGUnO1xyXG5cclxubGV0IGNvbGxlY3Rpb25NYWluID0gbmV3IFB1cmNoYXNlcy5Db2xsZWN0aW9uKCk7XHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tib25lLlZpZXcuZXh0ZW5kKHtcclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyhjb2xsZWN0aW9uTWFpbiwgJ3Jlc2V0JywgdGhpcy5yZW5kZXIpO1xyXG5cclxuICAgICAgICBjb2xsZWN0aW9uTWFpbi5mZXRjaCh7cmVzZXQ6IHRydWV9KTtcclxuICAgICAgIH0sXHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcHAgbWFpbiByZW5kZXJpbmcuLi5cIik7XHJcblxyXG4gICAgICAgICQoJyNhcHAnKS5lbXB0eSgpO1xyXG4gICAgICAgIGxldCB2aWV3ID0gbmV3IFB1cmNoYXNlcy5WaWV3KHsgY29sbGVjdGlvbjogY29sbGVjdGlvbk1haW4gfSk7XHJcbiAgICAgICAgbGV0IGh0bWwgPSB2aWV3LnJlbmRlcigpLmVsO1xyXG4gICAgICAgICQoJyNhcHAnKS5hcHBlbmQoaHRtbCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXBwL2FwcC52aWV3LmpzIiwiaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnLi9QdXJjaGFzZXMuQ29sbGVjdGlvbic7XHJcbmltcG9ydCBWaWV3IGZyb20gJy4vUHVyY2hhc2VzLlZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1ZpZXcsIENvbGxlY3Rpb259O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9QdXJjaGFzZXMvUHVyY2hhc2VzLk1vZHVsZS5qcyIsImltcG9ydCBQdXJjaGFzZSBmcm9tICcuL1B1cmNoYXNlL1B1cmNoYXNlLk1vZHVsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWNrYm9uZS5Db2xsZWN0aW9uLmV4dGVuZCh7XHJcbiAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjI1MDUvcHVyY2hhc2VzJyxcclxuICAgIG1vZGVsOiBQdXJjaGFzZS5Nb2RlbCxcclxuXHJcbiAgICBwYXJzZTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gZGF0YS5jb250ZW50O1xyXG4gICAgfVxyXG5cclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1B1cmNoYXNlcy9QdXJjaGFzZXMuQ29sbGVjdGlvbi5qcyIsImltcG9ydCBNb2RlbCBmcm9tICcuL1B1cmNoYXNlLk1vZGVsJztcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi9QdXJjaGFzZS5WaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtWaWV3LCBNb2RlbH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1B1cmNoYXNlcy9QdXJjaGFzZS9QdXJjaGFzZS5Nb2R1bGUuanMiLCJleHBvcnQgZGVmYXVsdCBCYWNrYm9uZS5Nb2RlbC5leHRlbmQoe1xyXG4gICAgaWRBdHRyaWJ1dGU6IFwiaWRcIixcclxuICAgIGRlZmF1bHRzOiB7XHJcbiAgICAgICAgYW1vdW50OiAwLjAwLFxyXG4gICAgICAgIGN1cnJlbmN5Olwi4oK0XCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJ1bmRlZmluZWRcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgdXJsOiBcInVybHNcIixcclxuICAgICAgICBwcmlvcml0eTogM1xyXG4gICAgfVxyXG5cclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1B1cmNoYXNlcy9QdXJjaGFzZS9QdXJjaGFzZS5Nb2RlbC5qcyIsImxldCB0ZW1wbGF0ZSA9IHJlcXVpcmUoJ2h0bWwhLi9wdXJjaGFzZS50bXBsLmh0bWwnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tib25lLlZpZXcuZXh0ZW5kKHtcclxuICAgIHRlbXBsYXRlOiBfLnRlbXBsYXRlKHRlbXBsYXRlKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICAgICdjbGljayAucHVyY2hhc2VJdGVtJzogJ21vcmVEZXRhaWxzJ1xyXG4gICAgfSxcclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlJywgdGhpcy5yZW5kZXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjbGFzc05hbWU6ICdwdXJjaGFzZUl0ZW0nLFxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBodG1sID0gdGhpcy50ZW1wbGF0ZSh0aGlzLm1vZGVsLnRvSlNPTigpKTtcclxuICAgICAgICB0aGlzLiRlbC5odG1sKGh0bWwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIG1vcmVEZXRhaWxzKGUpIHtcclxuICAgICAgICB0aGlzLiRlbC5maW5kKFwicHBEZXRhaWxzXCIpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9QdXJjaGFzZXMvUHVyY2hhc2UvUHVyY2hhc2UuVmlldy5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aW1nIGNsYXNzPVxcXCJwcEltYWdlUHJldiBwcGltZ1xcXCIgc3JjPVxcXCI8JT0gaW1hZ2UgJT5cXFwiPlxcclxcbjxoMyBjbGFzcz1cXFwicHBOYW1lXFxcIj48JT0gbmFtZSAlPjwvaDM+XFxyXFxuPHAgY2xhc3M9XFxcInBwQW1vdW50XFxcIj48JT0gYW1vdW50ICU+PC9wPlxcclxcbjxkaXYgY2xhc3M9XFxcInBwRGV0YWlsc1xcXCI+XFxyXFxuXFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcInBwSW1hZ2UgcHBpbWdcXFwiIHNyYz1cXFwiPCU9IGltYWdlICU+XFxcIj5cXHJcXG4gICAgPHAgY2xhc3M9XFxcInBwRGVzY1xcXCI+PCU9IGRlc2NyaXB0aW9uICU+PC9wPlxcclxcbiAgICA8cCBjbGFzcz1cXFwicHBVcmxzXFxcIj48JT0gdXJscyAlPjwvcD5cXHJcXG4gICAgPHAgY2xhc3M9XFxcInBwUHJpb3JpdHlcXFwiPjwlPSBwcmlvcml0eSAlPjwvcD5cXHJcXG4gICAgPHAgY2xhc3M9XFxcInBwQ2F0ZWdvcnlcXFwiPjwlPSBjYXRlZ29yeSAlPjwvcD5cXHJcXG5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHRtbC1sb2FkZXIhLi9zcmMvanMvUHVyY2hhc2VzL1B1cmNoYXNlL3B1cmNoYXNlLnRtcGwuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFB1cmNoYXNlIGZyb20gJy4vUHVyY2hhc2UvUHVyY2hhc2UuTW9kdWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tib25lLlZpZXcuZXh0ZW5kKHtcclxuICAgIGNsYXNzTmFtZTogJ3BwTGlzdCcsXHJcblxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLiRlbC5lbXB0eSgpO1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5lYWNoKHRoaXMuYWRkT25lLCB0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBhZGRPbmU6IGZ1bmN0aW9uKHB1cmNoYXNlKSB7XHJcbiAgICAgICAgdmFyIHB1cmNoYXNlID0gbmV3IFB1cmNoYXNlLlZpZXcgKHsgbW9kZWw6IHB1cmNoYXNlIH0pO1xyXG4gICAgICAgIGxldCBodG1sID0gcHVyY2hhc2UucmVuZGVyKCkuZWw7XHJcbiAgICAgICAgdGhpcy4kZWwuYXBwZW5kKCBodG1sICk7XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9QdXJjaGFzZXMvUHVyY2hhc2VzLlZpZXcuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nzcy9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=