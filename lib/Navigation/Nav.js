'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavSubMenu = require('./NavSubMenu');

var _NavSubMenu2 = _interopRequireDefault(_NavSubMenu);

var _NavRouterLink = require('./NavRouterLink');

var _NavRouterLink2 = _interopRequireDefault(_NavRouterLink);

var _Nav = require('./Nav.css');

var _Nav2 = _interopRequireDefault(_Nav);

var _Icon = require('../Icon/Icon.js');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultMenu = [{
  name: 'Collections',
  path: '/collections',
  nestedMenu: [{ name: 'Budget', path: '/collections/budget' }, { name: 'Emergency Response', path: '/collections/emergency' }, { name: 'Housing', path: '/collections/housing' }, { name: 'Homelessness', path: '/collections/homlessness' }, { name: 'Transportation', path: '/collections/transportation' }, { name: 'Past Projects', path: '/collections/past-projects' }]
}, { name: 'About', path: '/about' }];

var Nav = function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this));

    _this.handleClick = function (name, menu, e) {
      e.preventDefault();
      _this.setState({ menuActive: !_this.state.menuActive, items: menu });
    };

    _this.state = {
      menuActive: false,
      items: []
    };
    return _this;
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$menu = _props.menu,
          menu = _props$menu === undefined ? defaultMenu : _props$menu,
          _props$toggleNestedMe = _props.toggleNestedMenu,
          toggleNestedMenu = _props$toggleNestedMe === undefined ? this.handleClick : _props$toggleNestedMe;

      return _react2.default.createElement(
        'div',
        { className: _Nav2.default.Nav },
        _react2.default.createElement(
          'ul',
          null,
          menu.map(function (item, idx) {
            return item.nestedMenu ? _react2.default.createElement(
              'li',
              { key: idx, onClick: function onClick(e) {
                  return toggleNestedMenu(item.name, item.nestedMenu, e);
                } },
              _react2.default.createElement(
                'a',
                null,
                item.name,
                _react2.default.createElement(_Icon2.default, { className: 'fa fa-angle-down' })
              )
            ) // eslint-disable-line
            : _react2.default.createElement(_NavRouterLink2.default, {
              key: idx,
              name: item.name,
              path: item.path
            });
          })
        ),
        _react2.default.createElement(_NavSubMenu2.default, { isVisible: this.state.menuActive, items: this.state.items })
      );
    }
  }]);

  return Nav;
}(_react.Component);

Nav.propTypes = {
  menu: _react.PropTypes.arrayOf(_react.PropTypes.shape({ name: _react.PropTypes.string, path: _react.PropTypes.string })),
  toggleNestedMenu: _react.PropTypes.func
};

exports.default = Nav;