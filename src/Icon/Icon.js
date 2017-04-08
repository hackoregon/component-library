import React from 'react';

const Icon = ({ className, handleClick }) => (
  <i onClick={handleClick} className={className} />
);

Icon.propTypes = {
  className: React.PropTypes.string,
  handleClick: React.PropTypes.func,
};

export default Icon;
