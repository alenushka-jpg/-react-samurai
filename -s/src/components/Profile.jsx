import React from 'react';
import classes from'./Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.profile}>
      <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'></img>
      <section className={classes.content}>
        <div className={classes.contentImg}>
          <img src="https://avatarko.ru/img/kartinka/13/zhivotnye_sobaka_ochki_12359.jpg"/>
        </div>
        <div className={classes.contentDescription}>
          <p>Brutal dog</p>
          <span>Date of Bird: 19 january</span>
          <span>City: Tel-a-viv</span>
          <span>Education: frontend-development</span>
          <span>Web Site: *in developing*</span>
        </div>
      </section>
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