"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Popular = _interopRequireDefault(require("../../pages/Popular"));

var _Battle = _interopRequireDefault(require("../../pages/Battle"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

//内容部分
var Content = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Content, _React$Component);

  var _super = _createSuper(Content);

  function Content() {
    (0, _classCallCheck2["default"])(this, Content);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Content, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/"
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
        from: "/",
        to: "/Popular"
      })), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/Popular"
      }, /*#__PURE__*/_react["default"].createElement(_Popular["default"], null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/Battle"
      }, /*#__PURE__*/_react["default"].createElement(_Battle["default"], null))));
    }
  }]);
  return Content;
}(_react["default"].Component);

var _default = Content;
exports["default"] = _default;