import React from 'react';

const Icon = ({ className, handleClick }) => (
  <span><i onClick={handleClick} className={className} /></span>
);

Icon.propTypes = {
  className: React.PropTypes.string,
  handleClick: React.PropTypes.func,
};

export default Icon;
