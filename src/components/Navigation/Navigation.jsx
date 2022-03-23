import React from 'react';
import classes from'./Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Messages</a>
        </li>
        <li>
          <a>News</a>
        </li>
        <li>
          <a>Music</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;