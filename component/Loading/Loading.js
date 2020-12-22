"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Loading;

var _react = _interopRequireDefault(require("react"));

require("./Loading.css");

function Loading() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "center"
  }, "\u6B63\u5728\u52A0\u8F7D", /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-spinner fa-spin"
  }));
}