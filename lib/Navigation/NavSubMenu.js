'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Nav = require('./Nav.css');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pathOrName = function pathOrName(p, n) {
  return p || '/' + n.toLowerCase();
};

var NavSubMenu = function NavSubMenu(_ref) {
  var items = _ref.items,
      isVisible = _ref.isVisible;
  return _react2.default.createElement(
    'div',
    { className: _Nav2.default.nestedMenu + ' ' + (isVisible ? _Nav2.default.visible : _Nav2.default.hidden) },
    items.map(function (item, index) {
      return _react2.default.createElement(
        _reactRouter.Link,
        { key: index, to: pathOrName(item.path, item.name) },
        _react2.default.createElement(
          'span',
          { className: 'nested-menu-link' },
          item.name
        )
      );
    })
  );
};

NavSubMenu.displayName = 'NavSubMenu';
NavSubMenu.propTypes = {
  items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({})),
  isVisible: _react2.default.PropTypes.bool
};

exports.default = NavSubMenu;