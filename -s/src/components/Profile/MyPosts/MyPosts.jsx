import React from 'react';
import classes from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <section className={classes.myPosts}>
      <textarea placeholder='Add new news about dogs'></textarea>
      <button type='button'>send</button>
      <Post message="Hey, I'm a cruel dog. My calling is front-end development"/>
      <Post message="This is our new developer program"/>
    </section>
  )
};

export default MyPosts;