'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Hero.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultChildren = function DefaultChildren() {
  return _react2.default.createElement(
    'h1',
    null,
    'Data for the people,',
    _react2.default.createElement('br', null),
    'by the people.'
  );
};

var Hero = function Hero(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'Hero' },
    _react2.default.createElement(
      'div',
      { className: 'Container' },
      _react2.default.createElement(
        'div',
        { className: 'Content' },
        children || _react2.default.createElement(DefaultChildren, null)
      )
    )
  );
};

Hero.displayName = 'Hero';

Hero.propTypes = {
  children: _react2.default.PropTypes.node
};

exports.default = Hero;