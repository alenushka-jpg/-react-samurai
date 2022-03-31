import React from 'react';
import classes from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsMessange = [
    {id: 1, message: "Hey, I'm a cruel dog. My calling is front-end development"},
    {id: 2, message: "This is our new developer program"},
    {id: 3, message: "This is our new developer program"},
    {id: 4, message: "This is our new developer program"},
    {id: 5, message: "This is our new developer program"}
  ]

  let postMessange = postsMessange.map((post) => {
    return <Post message={post.message}/>
  })

  return (
    <section className={classes.myPosts}>
      <textarea placeholder='Add new news about dogs'></textarea>
      <button type='button'>send</button>
      { postMessange }
    </section>
  )
};

export default MyPosts;