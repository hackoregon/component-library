import React, { PropTypes, Component } from 'react';
import Nav from './Nav';
import Logo from '../Logo/LogoAnimated';
import styles from './Header.css';
import Grid from '../Grid/Grid.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      mobileNav: false,
    };
  }

  // togglesNestedMenu = () => this.setState({ nestedMenu: !this.state.nestedMenu })

  render() {
    const { children, menu, title } = this.props;
    return (
      <nav className={styles.header}>
        <div className={styles.logo}>
          <Logo alt={title} />
        </div>
        <Nav
          menu={menu}
          showNestedMenu={this.state.nestedMenu}
          togglesNestedMenu={this.togglesNestedMenu}
        />
        { children }
      </nav>
    );
  }

}

Header.displayName = 'Header';
Header.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
