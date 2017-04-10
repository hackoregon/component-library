'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LogoStandard = require('../Logo/LogoStandard');

var _LogoStandard2 = _interopRequireDefault(_LogoStandard);

var _ScrollToTop = require('../ScrollToTop/ScrollToTop');

var _ScrollToTop2 = _interopRequireDefault(_ScrollToTop);

var _Footer = require('./Footer.css');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'div',
    { className: _Footer2.default.footer },
    _react2.default.createElement(
      'div',
      { className: _Footer2.default.copyright },
      '\xA9 Copyright ',
      new Date().getFullYear()
    ),
    _react2.default.createElement(
      'div',
      { className: _Footer2.default.logo },
      _react2.default.createElement(_LogoStandard2.default, null)
    ),
    _react2.default.createElement(
      'div',
      { className: _Footer2.default.scrollToTop },
      _react2.default.createElement(_ScrollToTop2.default, { iconStyle: 'fa fa-angle-up' })
    )
  );
};

Footer.displayName = 'Footer';

exports.default = Footer;
// src={isClient ? require('../../assets/civic-logo-stack_standard.svg') : ''}