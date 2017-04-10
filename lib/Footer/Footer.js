'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _ScrollToTop = require('../ScrollToTop/ScrollToTop');

var _ScrollToTop2 = _interopRequireDefault(_ScrollToTop);

var _isClient = require('../utils/isClient');

var _isClient2 = _interopRequireDefault(_isClient);

var _Footer = require('./Footer.css');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_Footer2.default.Footer);
// import civicLogoStackStandard from ;


var Footer = function Footer(props) {
  return _react2.default.createElement(
    'div',
    { className: _Footer2.default.Footer },
    _react2.default.createElement(
      'div',
      { className: _Footer2.default.Container },
      _react2.default.createElement(
        'div',
        { className: _Footer2.default.copyright },
        '\xA9 Copyright ',
        new Date().getFullYear()
      ),
      _react2.default.createElement('img', {
        alt: 'Hack Oregon footer logo',
        className: 'footer-logo',
        src: _isClient2.default ? require('../../assets/civic-logo-stack_standard.svg') : ''

      }),
      _react2.default.createElement(
        _ScrollToTop2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'scroll-to-top' },
          _react2.default.createElement(_Icon2.default, { className: 'fa fa-angle-up' }),
          _react2.default.createElement('br', null),
          'Back to Top'
        )
      )
    )
  );
};

Footer.displayName = 'Footer';

exports.default = Footer;
// src={isClient ? require('../../assets/civic-logo-stack_standard.svg') : ''}