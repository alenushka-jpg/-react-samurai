import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from'./Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <NavLink className = {(navData) => navData.isActive ? classes.active : ''} to={'/profile'}>Profile</NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? classes.active : ''} to={'/dialogs'}>Messages</NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? classes.active : ''} to={'/news'}>News</NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? classes.active : ''} to={'/music'}>Music</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;