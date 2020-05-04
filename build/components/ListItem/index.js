"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = _interopRequireDefault(require("../theme"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  i.fa-li {\n    /* Font Awesome's top setting doesn't visually line up with text. */\n    top: ", ";\n\n    /*  */\n    color: ", ";\n\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var applyColor = function applyColor(color) {
  if (color in _theme["default"].colors) {
    return _theme["default"].colors[color];
  }

  return _theme["default"].colors.primary;
};

var LIStyled = _styledComponents["default"].li(_templateObject(), _theme["default"].units.liTopPosition, _theme["default"].colors.primary, function (props) {
  return props.iconColor && (0, _styledComponents.css)(_templateObject2(), applyColor(props.iconColor));
});

var ListItem = function ListItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      icon = _ref.icon,
      iconColor = _ref.iconColor,
      iconSpin = _ref.iconSpin;
  var cxLI = (0, _classnames["default"])(className);
  var cxIcon = (0, _classnames["default"])('fa', 'fa-li', "fa-".concat(icon), {
    'fa-spin': iconSpin
  });
  return /*#__PURE__*/_react["default"].createElement(LIStyled, {
    className: cxLI,
    iconColor: iconColor
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: cxIcon
  }), " ", children);
};

ListItem.propTypes = {
  // To allow styled-components wrapping.
  className: _propTypes["default"].string,
  // The list item text.
  children: _propTypes["default"].any,
  // The Font Awesome icon that is used as the bullet.
  // https://fontawesome.com/v4.7.0/icons/
  icon: _propTypes["default"].string,
  // Apply a custom color style to bullet.
  // Valid colors are those that are defined in `theme.colors`. Any other colors
  // that are passed in will result in a `theme.colors.primary` colored bullet.
  iconColor: _propTypes["default"].string,
  // Apply the `fa-spin` className to the bullet.
  // https://fontawesome.com/v4.7.0/examples/#animated
  iconSpin: _propTypes["default"].bool
};
ListItem.defaultProps = {
  icon: 'circle'
};
var _default = ListItem;
exports["default"] = _default;