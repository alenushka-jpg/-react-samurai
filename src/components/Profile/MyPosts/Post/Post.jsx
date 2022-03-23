import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.postItem}>
      <img src="https://avatarko.ru/img/kartinka/33/sobaka_odezhda_zhivotnye_34275.jpg"/>
      <p>{props.message}</p>
    </div>
  )
}

export default Post;