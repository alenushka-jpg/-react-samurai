import React from 'react';
import classes from'./Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.profile}>
      <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'></img>
      <section className={classes.content}>ava + description</section>
      <section className={classes.myPost}>
        <div className={classes.newPost}>
          <h2>new post</h2>
        </div>
      </section>
      <section className={classes.item}>post 1</section>
      <section className={classes.item}>post 2</section>
    </div>
  )
}

export default Profile;