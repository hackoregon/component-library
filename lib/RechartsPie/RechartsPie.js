'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recharts = require('recharts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RechartsPie = function RechartsPie(_ref) {
  var data = _ref.data,
      chartProportions = _ref.chartProportions,
      colors = _ref.colors,
      styles = _ref.styles;
  return _react2.default.createElement(
    'div',
    { style: { display: 'flex', justifyContent: 'space-around', margin: 'auto' } },
    _react2.default.createElement(
      _recharts.PieChart,
      { width: chartProportions.chartWidth, height: chartProportions.chartHeight, data: data },
      _react2.default.createElement(_recharts.Legend, { layout: 'vertical', iconSize: chartProportions.iconSize, wrapperStyle: styles, iconType: 'square', verticalAlign: 'middle', align: 'right' }),
      _react2.default.createElement(
        _recharts.Pie,
        { data: data, cx: '50%', cy: '50%', innerRadius: chartProportions.pieInnerRadius, outerRadius: chartProportions.pieOuterRadius },
        data.map(function (entry, index) {
          return _react2.default.createElement(_recharts.Cell, { key: 'cell-' + index, fill: colors[index] });
        })
      )
    )
  );
};

RechartsPie.propTypes = {
  data: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  chartProportions: _react.PropTypes.object.isRequired,
  colors: _react.PropTypes.arrayOf(_react.PropTypes.string),
  styles: _react.PropTypes.object
};

exports.default = RechartsPie;