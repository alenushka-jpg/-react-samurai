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
  let messengerData = [
    {id: 1, name: 'Axel Doberman'},
    {id: 2, name: 'Cooper labrador'},
    {id: 3, name: 'Spike Pitbull'},
    {id: 4, name: 'Arnold Rottweiler'},
    {id: 5, name: 'Connor Spitz'}
  ];

  let messageUsers = [
    {id: 1, message: 'Hello, dog on the line, how do you hear? I repeat, how do you hear?'},
    {id: 2, message: 'Hey, how"s the cat you shot?'},
    {id: 3, message: 'Brutal dog meeting tonight at 8pm'},
    {id: 4, message: 'My master is crazy! He puts on my collar and gets on all fours!'},
    {id: 5, message: 'Have you been castrated yet?'}
  ]
  return (
    <section className={classes.messenger}>
      <div className={classes.messenger__users}>
        <UserMessange name={messengerData[0].name} id={messengerData[0].id} />
        <UserMessange name={messengerData[1].name} id={messengerData[1].id} />
        <UserMessange name={messengerData[2].name} id={messengerData[2].id} />
        <UserMessange name={messengerData[3].name} id={messengerData[3].id} />
        <UserMessange name={messengerData[4].name} id={messengerData[4].id} />
      </div>
      <div className={classes.messenger__item}>
        <MessageItem message={messageUsers[0].message} />
        <MessageItem message={messageUsers[1].message} />
        <MessageItem message={messageUsers[2].message} />
        <MessageItem message={messageUsers[3].message} />
        <MessageItem message={messageUsers[4].message} />
      </div>
    </section>
  )
}

export default Messenger;