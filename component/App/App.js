"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./App.css");

var _Header = _interopRequireDefault(require("../Header/Header"));

var _Content = _interopRequireDefault(require("../Content/Content"));

var _Footer = _interopRequireDefault(require("../Footer/Footer"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

//App
var App = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, App);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "pagesClick", function (pages) {
      _this.setState({
        nowpages: pages
      });
    });
    _this.state = {
      nowpages: "Popular"
    };
    return _this;
  }

  (0, _createClass2["default"])(App, [{
    key: "render",
    value: function render() {
      var nowpages = this.state.nowpages;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.HashRouter, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
        pagesClick: this.pagesClick,
        nowpages: nowpages
      }), /*#__PURE__*/_react["default"].createElement(_Content["default"], {
        nowpages: nowpages
      })), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null)));
    }
  }]);
  return App;
}(_react["default"].Component);

var _default = App;
exports["default"] = _default;