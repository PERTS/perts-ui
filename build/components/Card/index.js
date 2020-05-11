"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = _interopRequireDefault(require("../theme"));

var _CardTitleGraphic = _interopRequireDefault(require("./CardTitleGraphic.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n\n  border-bottom: 1px solid ", ";\n  border-left: 1px solid ", ";\n  border-right: 1px solid ", ";\n\n  /*\n    Setting margin-top and margin-bottom so that the spacing set by the above\n    padding is consistent regardless of the first/last element used.\n  */\n  > :first-child {\n    margin-top: 0;\n  }\n\n  > :last-child {\n    margin-bottom: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n\n  font-weight: bold;\n  font-size: 18px;\n\n  border: 1px solid ", ";\n\n  padding: ", ";\n\n  background-image: url(", ");\n  background-size: 167px 96px;\n  background-repeat: no-repeat;\n  background-position: top right -50px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n\n  border-radius: ", ";\n\n  /* So children don't flow outside border-radius. */\n  overflow: hidden;\n\n  /* So last child's bottom left/right borders don't get cut off. */\n  > :last-child {\n    border-bottom-right-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardStyled = _styledComponents["default"].div(_templateObject(), _theme["default"].colors.white, _theme["default"].colors.text, _theme["default"].units.borderRadius, _theme["default"].units.borderRadius, _theme["default"].units.borderRadius);

var CardTitleStyled = _styledComponents["default"].div(_templateObject2(), _theme["default"].colors.primary, _theme["default"].colors.white, _theme["default"].colors.primary, _theme["default"].units.padding, _CardTitleGraphic["default"]);

var CardContentStyled = _styledComponents["default"].div(_templateObject3(), _theme["default"].units.padding, _theme["default"].colors.grayLight, _theme["default"].colors.grayLight, _theme["default"].colors.grayLight);

var Card = function Card(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? false : _ref$title;
  var cx = (0, _classnames["default"])(className);
  return /*#__PURE__*/_react["default"].createElement(CardStyled, {
    className: cx
  }, title && /*#__PURE__*/_react["default"].createElement(CardTitleStyled, null, title), children);
};

Card.Title = CardTitleStyled;
Card.Content = CardContentStyled;
Card.propTypes = {
  children: _propTypes["default"].any,
  className: _propTypes["default"].string,
  title: _propTypes["default"].any
};
Card.displayName = 'Card';
CardStyled.displayName = 'CardStyled';
CardTitleStyled.displayName = 'Card.Title';
CardContentStyled.displayName = 'Card.Content';
var _default = Card;
exports["default"] = _default;