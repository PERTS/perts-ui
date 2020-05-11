"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = _interopRequireDefault(require("../theme"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 20px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  transform: rotateZ(45deg);\n\n  .sk-cube {\n    float: left;\n    width: 50%;\n    height: 50%;\n    position: relative;\n    transform: scale(1.1);\n  }\n\n  .sk-cube:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: ", ";\n    animation: ", " 2.4s infinite linear both;\n    transform-origin: 100% 100%;\n  }\n\n  .sk-cube2 {\n    transform: scale(1.1) rotateZ(90deg);\n  }\n\n  .sk-cube3 {\n    transform: scale(1.1) rotateZ(180deg);\n  }\n\n  .sk-cube4 {\n    transform: scale(1.1) rotateZ(270deg);\n  }\n\n  .sk-cube2:before {\n    animation-delay: 0.3s;\n  }\n\n  .sk-cube3:before {\n    animation-delay: 0.6s;\n  }\n\n  .sk-cube4:before {\n    animation-delay: 0.9s;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0%,\n  10% {\n    transform: perspective(140px) rotateX(-180deg);\n    opacity: 0;\n  }\n  25%,\n  75% {\n    transform: perspective(140px) rotateX(0deg);\n    opacity: 1;\n  }\n  90%,\n  100% {\n    transform: perspective(140px) rotateY(180deg);\n    opacity: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Sourced from https://codepen.io/haitham/pen/brpGrm
var LoadingPadding = _styledComponents["default"].div(_templateObject());

var folding = (0, _styledComponents.keyframes)(_templateObject2());

var LoadingStyles = _styledComponents["default"].div(_templateObject3(), _theme["default"].colors.grayMedium, folding);

var Loading = function Loading() {
  return /*#__PURE__*/_react["default"].createElement(LoadingPadding, null, /*#__PURE__*/_react["default"].createElement(LoadingStyles, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sk-cube1 sk-cube"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sk-cube2 sk-cube"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sk-cube4 sk-cube"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sk-cube3 sk-cube"
  })));
};

var _default = Loading;
exports["default"] = _default;