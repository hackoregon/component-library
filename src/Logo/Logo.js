import React from 'react';

<<<<<<< HEAD
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);
=======
const Logo = ({ alt }) => (
  <img src={require('../../assets/civic-logo-animated-invert.svg')} alt={alt} />
);
>>>>>>> master

const Logo = () => {
  const svg = require.ensure([], require => require('../../assets/civic-logo.svg'));
  
  return (
    <div>
      {svg}
    </div>
  );
};
  
export default Logo;