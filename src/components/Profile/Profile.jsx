import React from 'react';
import classes from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={classes.profile}>
      <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'></img>
      <section className={classes.profile__content}>
        <div className={classes.profile__img}>
          <img src="https://avatarko.ru/img/kartinka/13/zhivotnye_sobaka_ochki_12359.jpg"/>
        </div>
        <div className={classes.profile__description}>
          <p>Brutal dog</p>
          <span>Date of Bird: 19 january</span>
          <span>City: Tel-a-viv</span>
          <span>Education: frontend-development</span>
          <span>Web Site: *in developing*</span>
        </div>
      </section>
      <MyPosts />
    </div>
  )
}

export default Profile;