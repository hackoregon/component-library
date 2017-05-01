"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var className = _ref.className,
      handleClick = _ref.handleClick;
  return _react2.default.createElement(
    "span",
    null,
    _react2.default.createElement("i", { onClick: handleClick, className: className, "aria-hidden": "true" })
  );
};

Icon.propTypes = {
  className: _react2.default.PropTypes.string,
  handleClick: _react2.default.PropTypes.func
};

exports.default = Icon;