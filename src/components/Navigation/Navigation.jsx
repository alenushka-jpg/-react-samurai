import React from 'react';
import classes from'./Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <a href='./profile'>Profile</a>
        </li>
        <li>
          <a href='./dialogs'>Messages</a>
        </li>
        <li>
          <a href='./news'>News</a>
        </li>
        <li>
          <a href='./music'>Music</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;