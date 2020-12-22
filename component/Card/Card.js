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

require("./Card.css");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

//展示卡片
var Card = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Card, _React$Component);

  var _super = _createSuper(Card);

  function Card() {
    (0, _classCallCheck2["default"])(this, Card);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          index = _this$props.index,
          source = _this$props.source;

      if (!source) {
        return /*#__PURE__*/_react["default"].createElement("div", null, "\u6CA1\u6709\u5361\u7247");
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "cradLight"
      }, /*#__PURE__*/_react["default"].createElement("h4", {
        className: "Ranking"
      }, "#", index), /*#__PURE__*/_react["default"].createElement("img", {
        src: source.owner.avatar_url,
        alt: source.name,
        className: "cardImg"
      }), /*#__PURE__*/_react["default"].createElement("h2", {
        className: "cardTitle"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: source.html_url,
        className: "cardLink cardA",
        target: "_blank"
      }, source.owner.login)), /*#__PURE__*/_react["default"].createElement("ul", {
        className: "cardList"
      }, /*#__PURE__*/_react["default"].createElement("li", {
        className: "cardListLi"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "cardMan"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-user fa-fw icon",
        style: {
          color: 'rgb(255, 191, 116)'
        }
      }), /*#__PURE__*/_react["default"].createElement("a", {
        href: source.owner.html_url,
        target: "_blank",
        className: "cardListA cardA"
      }, source.owner.login)))), /*#__PURE__*/_react["default"].createElement("li", {
        className: "cardListLi"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-star fa-fw icon",
        style: {
          color: 'rgb(255, 215, 0)'
        }
      }), source.stargazers_count, " stars"), /*#__PURE__*/_react["default"].createElement("li", {
        className: "cardListLi"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-code-fork fa-fw icon",
        style: {
          color: 'rgb(129, 195, 245)'
        }
      }), source.forks, " forks"), /*#__PURE__*/_react["default"].createElement("li", {
        className: "cardListLi"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-warning fa-fw icon",
        style: {
          color: 'rgb(241, 138, 147)'
        }
      }), source.open_issues, " Open issues")));
    }
  }]);
  return Card;
}(_react["default"].Component);

var _default = Card;
exports["default"] = _default;