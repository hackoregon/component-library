'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    @media (max-width: ', 'px) {\n      ', '\n    }\n  '], ['\n    @media (max-width: ', 'px) {\n      ', '\n    }\n  ']);

var _isClient = require('../utils/isClient');

var _isClient2 = _interopRequireDefault(_isClient);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// these sizes are arbitrary and you can set them to whatever you wish


var sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
};

// iterate through the sizes and create a media template
var media = Object.keys(sizes).reduce(function (accumulator, label) {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  var pxSize = sizes[label] / 16;
  accumulator[label] = function () {
    return (0, _styledComponents.css)(_templateObject, pxSize, _styledComponents.css.apply(undefined, arguments));
  };
  return accumulator;
}, {});

exports.default = media;