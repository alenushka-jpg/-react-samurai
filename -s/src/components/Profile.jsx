import React from 'react';

const Profile = () => {
  return (
    <div className='app-container__profile'>
      <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'></img>
      <section className='app-container__content'>ava + description</section>
      <section className='app-container__my-post'>
        my post
        <div className='app-container__new-post'>new post</div>
      </section>
      <section className='app-container__post'>post 1</section>
      <section className='app-container__post'>post 2</section>
    </div>
  )
}

export default Profile