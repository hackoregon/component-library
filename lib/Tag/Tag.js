'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    padding: 6px 6px 6px 6px;\n    text-align: center;\n    transition: all .2s ease-in-out;\n    font-size: 1em;\n    font-weight: 500;\n    color: rgba(255, 255, 255, 1);\n    cursor: pointer;\n    border: 2px solid rgba(255, 255, 255, 1);\n'], ['\n    padding: 6px 6px 6px 6px;\n    text-align: center;\n    transition: all .2s ease-in-out;\n    font-size: 1em;\n    font-weight: 500;\n    color: rgba(255, 255, 255, 1);\n    cursor: pointer;\n    border: 2px solid rgba(255, 255, 255, 1);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLink = (0, _styledComponents2.default)(_reactRouter.Link)(_templateObject);

var Tag = function Tag(props) {
  return _react2.default.createElement(
    StyledLink,
    { to: props.location },
    props.name
  );
};

Tag.displayName = 'Tag';
Tag.propTypes = {
  location: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string
};

exports.default = Tag;