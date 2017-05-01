'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _LogoAnimated = require('../Logo/LogoAnimated');

var _LogoAnimated2 = _interopRequireDefault(_LogoAnimated);

var _Header = require('./Header.css');

var _Header2 = _interopRequireDefault(_Header);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _styleConstants = require('../styleConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.togglesNestedMenu = function () {
      return _this.setState({ menuActive: !_this.state.menuActive });
    };

    _this.state = {
      menuActive: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          menu = _props.menu,
          title = _props.title;

      return _react2.default.createElement(
        'div',
        { className: _Header2.default.container },
        _react2.default.createElement(
          'nav',
          { className: _Header2.default.header },
          _react2.default.createElement(
            'div',
            { className: _Header2.default.logo },
            _react2.default.createElement(_LogoAnimated2.default, { alt: title })
          ),
          _react2.default.createElement(
            'div',
            { className: _Header2.default.nav + ' ' + (this.state.menuActive ? _Header2.default.active : _Header2.default.inactive) },
            _react2.default.createElement(_Nav2.default, {
              menu: menu,
              toggleSubNav: this.togglesNestedMenu,
              showNestedMenu: this.state.nestedMenu,
              togglesNestedMenu: this.togglesNestedMenu
            }),
            children
          ),
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement(_Icon2.default, {
              key: 'nav-burger',
              className: _styleConstants.ICONS.hamburger + ' ' + _Header2.default.burger,
              handleClick: this.togglesNestedMenu
            })
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

Header.displayName = 'Header';
Header.propTypes = {
  menu: _react.PropTypes.arrayOf(_react.PropTypes.shape({})),
  title: _react.PropTypes.string,
  children: _react.PropTypes.node
};

exports.default = Header;