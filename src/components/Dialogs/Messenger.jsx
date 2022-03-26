import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Messenger.module.css'

const UserMessange = (props) => {
  return (
    <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
  )
}

const MessageItem = (props) => {
  return (
    <p>{props.message}</p>
  )
}

const Messenger = () => {
  return (
    <section className={classes.messenger}>
      <div className={classes.messenger__users}>
        <UserMessange name='Axel Doberman' id='1' />
        <UserMessange name='Cooper labrador' id='2' />
        <UserMessange name='Spike Pitbull' id='3' />
        <UserMessange name='Arnold Rottweiler' id='4' />
        <UserMessange name='Connor Spitz' id='5' />
      </div>
      <div className={classes.messenger__item}>
        <MessageItem message='Hello, dog on the line, how do you hear? I repeat, how do you hear?' />
        <MessageItem message='Hey, how"s the cat you shot?' />
        <MessageItem message='Brutal dog meeting tonight at 8pm' />
        <MessageItem message='My master is crazy! He puts on my collar and gets on all fours!' />
        <MessageItem message='Have you been castrated yet?' />
      </div>
    </section>
  )
}

export default Messenger;