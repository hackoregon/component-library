import React from 'react';
import './Hero.css';

const DefaultChildren = () => (
  <h1>Data for the people,<br />by the people.</h1>
);

const Hero = ({ children }) => (
  <div className="Hero">
    <div className="Container">
      <div className="Content">
        {children || <DefaultChildren />}
      </div>
    </div>
  </div>
);

Hero.displayName = 'Hero';

Hero.propTypes = {
  children: React.PropTypes.node,
};

export default Hero;
