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

require("./Header.css");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var LinkList = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LinkList, _React$Component);

  var _super = _createSuper(LinkList);

  function LinkList() {
    (0, _classCallCheck2["default"])(this, LinkList);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LinkList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: "navUl"
      }, /*#__PURE__*/_react["default"].createElement("li", {
        className: "navLi"
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
        to: "/Popular",
        className: "btn-default",
        activeClassName: "btn-active"
      }, "Popular")), /*#__PURE__*/_react["default"].createElement("li", {
        className: "navLi"
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
        to: "/Battle",
        className: "btn-default",
        activeClassName: "btn-active"
      }, "Battle")));
    }
  }]);
  return LinkList;
}(_react["default"].Component); //头部


var Header = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2["default"])(Header, _React$Component2);

  var _super2 = _createSuper(Header);

  function Header() {
    (0, _classCallCheck2["default"])(this, Header);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pagesClick = _this$props.pagesClick,
          nowpages = _this$props.nowpages;
      return /*#__PURE__*/_react["default"].createElement("nav", {
        className: "nav"
      }, /*#__PURE__*/_react["default"].createElement(LinkList, {
        pagesClick: pagesClick,
        nowpages: nowpages
      }));
    }
  }]);
  return Header;
}(_react["default"].Component);

var _default = Header;
exports["default"] = _default;