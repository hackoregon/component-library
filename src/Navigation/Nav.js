import React, { PropTypes } from 'react';
import NavLink from './NavRouterLink';
import isClient from '../utils/isClient';

const defaultMenu = [
  {
    name: 'Collections',
    path: '/collections',
    nestedMenu: [
      { name: 'Budget', path: '/collections/budget' },
      { name: 'Emergency Response', path: '/collections/emergency' },
      { name: 'Housing', path: '/collections/housing' },
      { name: 'Homlessness', path: '/collections/homlessness' },
      { name: 'Transportation', path: '/collections/transportation' },
      { name: 'Past Projects', path: '/collections/past-projects' },
    ],
  },
  { name: 'Explore', path: '/explore' },
  { name: 'About', path: '/about' },
];

const Nav = ({ menu = defaultMenu, toggleNestedMenu, showNestedMenu }) => {
  if (isClient) require('./Nav.css');
  return (
    <ul style={{ display: 'flex', width: '100%', listStyle: 'none', padding: '1rem', flex: '1 1 100%' }}>
      {menu.map((item, idx) => (
        <NavLink
          nestedMenu={item.nestedMenu || []}
          showNestedMenu={showNestedMenu}
          toggleNestedMenu={toggleNestedMenu}
          customStyles={{ flex: '1 1 100%' }}
          key={idx}
          name={item.name}
          path={item.path}
        />
      ))}
    </ul>
  );
};

Nav.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, path: PropTypes.string })),
  showNestedMenu: PropTypes.bool,
  toggleNestedMenu: PropTypes.func,
};

Nav.defaultProps = {
  showNestedMenu: false,
};

export default Nav;
