import React, { PropTypes } from 'react';
import NavLink from './NavRouterLink';
import isClient from '../utils/isClient';
import media from '../Media/Media.js';
import styled from 'styled-components';

const defaultMenu = [
  { name: 'Collections', path: '/collections' },
  { name: 'Explore', path: '/explore' },
  { name: 'About', path: '/about' },
];

const Container = styled.ul`
  width: 100%; 
  list-style: none; 
  padding: 1rem;
  display: flex; 
  flex: 1 1 100%;
  ${media.desktop``}
  ${media.tablet`display: block;`}
  ${media.phone`display: block;`}
  `;

const Nav = ({ menu = defaultMenu }) => {
  if (isClient) require('./Nav.css');
  return (
    <Container>
      {menu.map((item, idx) => <NavLink customStyles={{ flex: '1 1 100%' }} key={idx} name={item.name} path={item.path} />)}
    </Container>
  );
};

Nav.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, path: PropTypes.string })),
};

export default Nav;