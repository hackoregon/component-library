'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StoryFooter = require('./StoryFooter');

var _StoryFooter2 = _interopRequireDefault(_StoryFooter);

var _StoryCard = require('./StoryCard.css');

var _StoryCard2 = _interopRequireDefault(_StoryCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StoryCard = function StoryCard(_ref) {
  var cardId = _ref.cardId,
      collectionId = _ref.collectionId,
      title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: _StoryCard2.default.card },
    _react2.default.createElement(
      'h2',
      { className: 'Title Rubik' },
      title
    ),
    _react2.default.createElement(
      'div',
      { className: _StoryCard2.default.description },
      children
    ),
    _react2.default.createElement(_StoryFooter2.default, { cardId: cardId, collectionId: collectionId })
  );
};

StoryCard.displayName = 'StoryCard';

StoryCard.propTypes = {
  title: _react.PropTypes.string,
  cardId: _react.PropTypes.string,
  collectionId: _react.PropTypes.string,
  children: _react.PropTypes.node
};

exports.default = StoryCard;