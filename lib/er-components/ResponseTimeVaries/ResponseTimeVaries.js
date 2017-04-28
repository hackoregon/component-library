'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recharts = require('recharts');

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
const data = [{ x: 100, y: 200, z: 200 }, { x: 120, y: 100, z: 260 },
                { x: 170, y: 300, z: 400 }, { x: 140, y: 250, z: 280 },
                { x: 150, y: 400, z: 500 }, { x: 110, y: 280, z: 200 }];
*/

/*
{
   "fma":31,
   "fma_population_total":31487,
   "percent_owner_occ_hh":0.521215661436334,
   "percent_renter_occ_hh":0.478784338563666,
   "median_hh_income":44065,
   "percent_w_hinsurance":0.896325841412133,
   "percent_wo_hinsurance":0.103674158587867,
   "percent_college_grad_or_higher":0.114265009644617,
   "percent_rec_fs":0.355313564112158,
   "percent_total_lesh":0.110621660221432,
   "percent_non_white":0.312902719232711,
   "percent_below_pov":0.303463352763139,
   "percent_member_65plus":0.234894600812354,
   "percent_diff_area":0.0235819971906545,
   "median_response_time":5.23333333333333,
   "ave_weekly_incidents":291,
   "fma_area_mi":4.22098842545387,
   "num_incidents_med":12722,
   "incidents_sqmi_med":3014,
   "num_incidents_fire":468,
   "incidents_sqmi_fire":111,
   "fma_population_density":2880.13148334867,
   "fire_incidents_2016":81,
   "medical_incidents_2016":2104,
   "total_incidents_2016":2687,
   "fire_incidents_per_1000":2.57249023406485,
   "medical_incidents_per_1000":66.8212278083018,
   "total_incidents_per_1000":85.3368056658303
}
*/

var Scatterplot = function Scatterplot() {
  return _react2.default.createElement(
    'div',
    { style: { display: 'flex', flexFlow: 'row wrap' } },
    _react2.default.createElement(
      _recharts.ResponsiveContainer,
      { width: '33.333%', aspect: '1' },
      _react2.default.createElement(
        _recharts.ScatterChart,
        null,
        _react2.default.createElement(_recharts.XAxis, { dataKey: 'fma_population_total', name: 'Population' }),
        _react2.default.createElement(_recharts.YAxis, { dataKey: 'median_response_time', name: 'Response Time', unit: 'min' }),
        _react2.default.createElement(_recharts.ZAxis, { dataKey: 'fma', name: 'Fire Management Area' }),
        _react2.default.createElement(_recharts.Scatter, { name: 'Response Time vs. FMA Population', data: _data2.default, fill: '#D7075F' }),
        _react2.default.createElement(_recharts.CartesianGrid, null),
        _react2.default.createElement(_recharts.Legend, null),
        _react2.default.createElement(_recharts.Tooltip, { cursor: { strokeDasharray: '3 3' } })
      )
    ),
    _react2.default.createElement(
      _recharts.ResponsiveContainer,
      { width: '33.333%', aspect: '1' },
      _react2.default.createElement(
        _recharts.ScatterChart,
        null,
        _react2.default.createElement(_recharts.XAxis, { dataKey: 'median_hh_income', name: 'Median Household Income', unit: '$' }),
        _react2.default.createElement(_recharts.YAxis, { dataKey: 'median_response_time', name: 'Response Time', unit: 'min' }),
        _react2.default.createElement(_recharts.ZAxis, { dataKey: 'fma', name: 'Fire Management Area' }),
        _react2.default.createElement(_recharts.Scatter, { name: 'Response Time vs FMA Median Income', data: _data2.default, fill: '#D7075F' }),
        _react2.default.createElement(_recharts.CartesianGrid, null),
        _react2.default.createElement(_recharts.Legend, null),
        _react2.default.createElement(_recharts.Tooltip, { cursor: { strokeDasharray: '3 3' } })
      )
    ),
    _react2.default.createElement(
      _recharts.ResponsiveContainer,
      { width: '33.333%', aspect: '1' },
      _react2.default.createElement(
        _recharts.ScatterChart,
        null,
        _react2.default.createElement(_recharts.XAxis, { dataKey: 'percent_non_white', name: 'Non-White', unit: '%' }),
        _react2.default.createElement(_recharts.YAxis, { dataKey: 'median_response_time', name: 'Response Time', unit: 'min' }),
        _react2.default.createElement(_recharts.ZAxis, { dataKey: 'fma', name: 'Fire Management Area' }),
        _react2.default.createElement(_recharts.Scatter, { name: 'Response Time vs FMA % Non-White', data: _data2.default, fill: '#D7075F' }),
        _react2.default.createElement(_recharts.CartesianGrid, null),
        _react2.default.createElement(_recharts.Legend, null),
        _react2.default.createElement(_recharts.Tooltip, { cursor: { strokeDasharray: '3 3' } })
      )
    ),
    _react2.default.createElement(
      _recharts.ResponsiveContainer,
      { width: '33.333%', aspect: '1' },
      _react2.default.createElement(
        _recharts.ScatterChart,
        null,
        _react2.default.createElement(_recharts.XAxis, { dataKey: 'fma_population_total', name: 'Population' }),
        _react2.default.createElement(_recharts.YAxis, { dataKey: 'total_incidents_per_1000', name: 'Incidents Per Thousand' }),
        _react2.default.createElement(_recharts.ZAxis, { dataKey: 'fma', name: 'Fire Management Area' }),
        _react2.default.createElement(_recharts.Scatter, { name: 'Incidents Per Thousand vs FMA Population', data: _data2.default, fill: '#D7075F' }),
        _react2.default.createElement(_recharts.CartesianGrid, null),
        _react2.default.createElement(_recharts.Legend, null),
        _react2.default.createElement(_recharts.Tooltip, { cursor: { strokeDasharray: '3 3' } })
      )
    ),
    _react2.default.createElement(
      _recharts.ResponsiveContainer,
      { width: '33.333%', aspect: '1' },
      _react2.default.createElement(
        _recharts.ScatterChart,
        null,
        _react2.default.createElement(_recharts.XAxis, { dataKey: 'median_hh_income', name: 'Median Household Income', unit: '$' }),
        _react2.default.createElement(_recharts.YAxis, { dataKey: 'total_incidents_per_1000', name: 'Incidents Per Thousand' }),
        _react2.default.createElement(_recharts.ZAxis, { dataKey: 'fma', name: 'Fire Management Area' }),
        _react2.default.createElement(_recharts.Scatter, { name: 'Incidents Per Thousand vs FMA Median Income', data: _data2.default, fill: '#D7075F' }),
        _react2.default.createElement(_recharts.CartesianGrid, null),
        _react2.default.createElement(_recharts.Legend, null),
        _react2.default.createElement(_recharts.Tooltip, { cursor: { strokeDasharray: '3 3' } })
      )
    ),
    _react2.default.createElement(
      _recharts.ResponsiveContainer,
      { width: '33.333%', aspect: '1' },
      _react2.default.createElement(
        _recharts.ScatterChart,
        null,
        _react2.default.createElement(_recharts.XAxis, { dataKey: 'percent_non_white', name: 'Non-White', unit: '%' }),
        _react2.default.createElement(_recharts.YAxis, { dataKey: 'total_incidents_per_1000', name: 'Incidents Per Thousand' }),
        _react2.default.createElement(_recharts.ZAxis, { dataKey: 'fma', name: 'Fire Management Area' }),
        _react2.default.createElement(_recharts.Scatter, { name: 'Incidents Per Thousand vs FMA % Non-White', data: _data2.default, fill: '#D7075F' }),
        _react2.default.createElement(_recharts.CartesianGrid, null),
        _react2.default.createElement(_recharts.Legend, null),
        _react2.default.createElement(_recharts.Tooltip, { cursor: { strokeDasharray: '3 3' } })
      )
    )
  );
};

exports.default = Scatterplot;