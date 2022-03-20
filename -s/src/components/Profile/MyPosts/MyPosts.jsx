import React from 'react';
import classes from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <section className={classes.myPosts}>
      <textarea placeholder='Add new news about dogs'></textarea>
      <button type='button'>send</button>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </section>
  )
};

export default MyPosts;