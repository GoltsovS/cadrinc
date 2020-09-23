import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { FC, ReactElement } from 'react';
import './styles.styl';

export interface NavBarProps {
  navItems: Array<{ to: string; name: string }>;
}

const NavBar: FC<NavBarProps> = ({ navItems }): ReactElement => {
  const navItem = (to: string, name: string): ReactElement => (
    <NavLink to={to} activeClassName="active">
      {name}
    </NavLink>
  );

  const navList = (items: Array<{ to: string; name: string }>) => (
    <ul className="navbar-list">
      {items.map(
        (item: { to: string; name: string }) => (
          <li key={item.name} className="navbar-list__item">
            {navItem(item.to, item.name)}
          </li>
        ),
        '',
      )}
    </ul>
  );

  return <nav className="navbar">{navList(navItems)}</nav>;
};

export default NavBar;
