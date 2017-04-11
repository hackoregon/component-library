'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isClient = require('../utils/isClient');

var _isClient2 = _interopRequireDefault(_isClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  height: '80px',
  width: 'auto'
};

var LogoStandard = function LogoStandard() {
  return _react2.default.createElement('img', {
    alt: 'Hack Oregon footer logo',
    src: _isClient2.default ? require('../../assets/civic-logo-stack_standard.svg') : '',
    style: styles
  });
};

exports.default = LogoStandard;