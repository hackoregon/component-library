'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavRouterLink = require('./NavRouterLink');

var _NavRouterLink2 = _interopRequireDefault(_NavRouterLink);

var _Nav = require('./Nav.css');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultMenu = [{ name: 'Collections', path: '/collections' }, { name: 'About', path: '/about' }];
// import isClient from '../utils/isClient';


var Nav = function Nav(_ref) {
  var _ref$menu = _ref.menu,
      menu = _ref$menu === undefined ? defaultMenu : _ref$menu;
  return _react2.default.createElement(
    'div',
    { className: _Nav2.default.Nav },
    _react2.default.createElement(
      'ul',
      null,
      menu.map(function (item, idx) {
        return _react2.default.createElement(_NavRouterLink2.default, { customStyles: { flex: '1 1 100%' }, key: idx, name: item.name, path: item.path });
      })
    )
  );
};

Nav.propTypes = {
  menu: _react.PropTypes.arrayOf(_react.PropTypes.shape({ name: _react.PropTypes.string, path: _react.PropTypes.string }))
};

exports.default = Nav;