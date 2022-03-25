import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <section className={classes.dialogs}>
      <ul className={classes.dialogs__list}>
        <li>
          <NavLink to='/dialogs/1'>Axel Doberman</NavLink>
        </li>
        <li>
          <NavLink to='/dialogs/2'>Cooper labrador</NavLink>
        </li>
        <li>
          <NavLink to='/dialogs/3'>Spike Pitbull</NavLink>
        </li>
        <li>
          <NavLink to='/dialogs/4'>Arnold Rottweiler</NavLink>
        </li>
        <li>
          <NavLink to='/dialogs/5'>Connor Spitz</NavLink>
        </li>
      </ul>

    </section>
  )
}

export default Dialogs;