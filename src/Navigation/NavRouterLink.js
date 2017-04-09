import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import isClient from '../utils/isClient';

const NavRouterLink = ({ path, customStyles, name, nestedMenu, showNestedMenu, toggleNestedMenu }) => {
  if (isClient) require('./NavRouterLink.css');
  const boxStyle = customStyles ? customStyles.box : null;
  const linkStyle = customStyles ? customStyles.link : null;
  const pathTo = path || `/${name.toLowerCase()}`;

  return (
    <li className={'NavRouterLink'} style={{ ...boxStyle }} >
      <Link to={pathTo} >
        <span style={{ ...linkStyle }}>{name}</span>
      </Link>

      {showNestedMenu && nestedMenu.length ?
        <div className="nested-menu" style={{ visibility: 'hidden', opacity: '0' }}>
          {nestedMenu.map((item, index) => (
            <Link key={index} to={item.path || `/${item.name.toLowerCase()}`} >
              <span className="nested-menu-link">{item.name}</span>
            </Link>
          ))}
        </div>
        : null
      }

    </li>
  );
};

NavRouterLink.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  customStyles: PropTypes.object,
  nestedMenu: PropTypes.array,

};

NavRouterLink.defaultProps = {
  nestedMenu: [],
};

export default NavRouterLink;
