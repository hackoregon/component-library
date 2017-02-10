import React, { PropTypes } from 'react';
import Nav from './Nav';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = ({ title = 'Civic', children }) => (
  <div className={'Header'}>
    <nav>
      <div className="logo">

        <Logo alt={title} />
      </div>
      <Nav />
      { children }
    </nav>
  </div>
);

Header.displayName = 'Header';
Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Header;