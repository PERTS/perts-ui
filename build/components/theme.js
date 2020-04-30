"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// PERTS Style Guide
// https://docs.google.com/document/d/1OLRm8TcnhIVQ-UW0cCWvTjVrbwYlJZVGvjpwAMWoVwQ
var colorsBrand = {
  primary: '#1C9DE3',
  primaryDark: '#061D2A',
  primaryLight: '#ACDBF4',
  green: '#44E790',
  red: '#E74444',
  white: '#F7F8FA',
  yellow: '#E7DA44'
};
var colorsAliases = {
  info: colorsBrand.yellow,
  success: colorsBrand.green,
  warning: colorsBrand.red
};
var units = {
  lineHeight: '1.4em',
  liFontTopPosition: '.14em'
};
var _default = {
  colors: _objectSpread({}, colorsAliases, {}, colorsBrand),
  units: units
};
exports["default"] = _default;