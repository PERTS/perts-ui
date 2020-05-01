"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HelloWorld = function HelloWorld(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/_react["default"].createElement("div", null, "Hello ", name, "!z1");
};

HelloWorld.propTypes = {
  name: _propTypes["default"].string
};
HelloWorld.defaultProps = {
  name: 'World'
};
var _default = HelloWorld;
exports["default"] = _default;