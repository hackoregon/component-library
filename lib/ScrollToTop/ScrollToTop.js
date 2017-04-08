'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _ScrollToTop = require('./ScrollToTop.css');

var _ScrollToTop2 = _interopRequireDefault(_ScrollToTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_ScrollToTop2.default);

var className = cx({ SecondaryColor: true, RemoveUnderline: true });

var ScrollToTop = function ScrollToTop(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'a',
    { 'aria-label': 'scroll to top', className: className, href: '#' },
    children
  );
};

ScrollToTop.displayName = 'ScrollToTop';

exports.default = ScrollToTop;