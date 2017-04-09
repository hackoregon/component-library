import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import isClient from '../utils/isClient';

const StoryLink = ({ children, icon, route, action }) => {
  if (isClient) require('./StoryLink.css');
  return (
    <div className="StoryLink">
      {route
        ? <Link to={route}><i className={icon} /><span>{children}</span></Link>
        : <a tabIndex="0" onClick={action}><i className={icon} /><span>{children}</span></a>
      }
    </div>
  );
};

StoryLink.displayName = 'StoryLink';
StoryLink.propTypes = {
  action: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.string,
  route: PropTypes.string,
};

export default StoryLink;
