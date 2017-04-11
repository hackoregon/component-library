'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hashToGoToTop = '#';
var styles = { display: 'flex', flexDirection: 'column', textAlign: 'center' };

var ScrollToTop = function ScrollToTop(_ref) {
  var _ref$iconStyle = _ref.iconStyle,
      iconStyle = _ref$iconStyle === undefined ? null : _ref$iconStyle;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'a',
      {
        style: styles,
        'aria-label': 'scroll to top',
        href: hashToGoToTop
      },
      iconStyle && _react2.default.createElement(_Icon2.default, { className: iconStyle }),
      _react2.default.createElement(
        'span',
        null,
        'Back to Top'
      )
    )
  );
};

ScrollToTop.displayName = 'ScrollToTop';
ScrollToTop.propTypes = {
  iconStyle: _react2.default.PropTypes.string
};

exports.default = ScrollToTop;