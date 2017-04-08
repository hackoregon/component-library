'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _DropdownStyles = require('./Dropdown.styles.css');

var _DropdownStyles2 = _interopRequireDefault(_DropdownStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_DropdownStyles2.default);

var className = cx({ base: true });

var Dropdown = function Dropdown(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      value = _ref.value,
      clearable = _ref.clearable,
      searchable = _ref.searchable,
      disabled = _ref.disabled;
  return _react2.default.createElement(_reactSelect2.default, {
    className: className,
    options: options,
    onChange: onChange,
    value: value,
    clearable: clearable,
    searchable: searchable,
    disabled: disabled
  });
};

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  onChange: _react.PropTypes.func.isRequired,
  options: _react.PropTypes.array.isRequired,
  value: _react.PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  clearable: _react.PropTypes.bool,
  searchable: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool
};

Dropdown.defaultProps = {
  clearable: false,
  searchable: true,
  disabled: false
};

exports.default = Dropdown;