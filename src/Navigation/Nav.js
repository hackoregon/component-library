import React, { PropTypes } from 'react';
import NavLink from './NavRouterLink';
import styles from './Nav.css';

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
  { name: 'About', path: '/about' },
];

const Nav = ({ menu = defaultMenu, toggleNestedMenu, showNestedMenu  }) => (
  <div className={styles.Nav}>
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
  </div>
);

Nav.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, path: PropTypes.string })),
  toggleNestedMenu: PropTypes.func,
  showNestedMenu: PropTypes.bool,
};

Nav.defaultProps = {
  showNestedMenu: true,
};

export default Nav;
