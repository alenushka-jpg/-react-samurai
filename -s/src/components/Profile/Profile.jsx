import React from 'react';
import classes from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Post from './MyPosts/Post/Post';

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
      <MyPosts />
      <Post />
    </div>
  )
}

export default Profile;