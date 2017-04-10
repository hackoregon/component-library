'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hero = require('./Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _Tag = require('../Tag/Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _ShareCollection = require('../Share/ShareCollection');

var _ShareCollection2 = _interopRequireDefault(_ShareCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollectionHero = function CollectionHero(props) {
  return _react2.default.createElement(
    _Hero2.default,
    null,
    _react2.default.createElement(_Tag2.default, { name: props.featuredTag }),
    _react2.default.createElement(
      'h1',
      null,
      props.title
    ),
    _react2.default.createElement(_ShareCollection2.default, { collectionId: props.collectionId })
  );
};

exports.default = CollectionHero;