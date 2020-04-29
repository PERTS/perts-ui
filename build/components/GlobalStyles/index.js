"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StylesAlignVertically = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  body {\n    /* Center content vertically. */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    min-height: 100vh;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StylesAlignVertically = (0, _styledComponents.createGlobalStyle)(_templateObject());
exports.StylesAlignVertically = StylesAlignVertically;