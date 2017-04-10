import React from 'react';
import SliderTooltip from './SliderTooltip';
import RcSlider from './RcSlider';
import isClient from '../utils/isClient';

const Slider = ({ value, onChange, min, max }) => {
  if (isClient) {
    require('!style-loader!css-loader!rc-slider/assets/index.css'); // eslint-disable-line
    require('!style-loader!css-loader!./SliderBox.css'); // eslint-disable-line
  }
  return (
    <div>
      <RcSlider tipformatter={null} min={min} max={max} value={value} onChange={onChange} />
      <SliderTooltip value={value} />
    </div>
  );
};
Slider.propTypes = {
  value: React.PropTypes.number,
  onChange: React.PropTypes.func,
  max: React.PropTypes.number,
  min: React.PropTypes.number,
};

export default Slider;
