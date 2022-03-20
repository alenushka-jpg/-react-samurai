import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <header className='app-container__header'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnqJC_pbyrULA6yp3ifRGkCRijOXoXDf-qA&usqp=CAU'></img>
      </header>
      <nav className='app-container__navigation'>
        <ul>
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Messages</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Music</a>
          </li>
        </ul>
      </nav>
      <div className='app-container__section'>
        <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'></img>
        <section className='app-container__content'>ava + description</section>
        <section className='app-container__my-post'>
          my post
          <div className='app-container__new-post'>new post</div>
        </section>
        <section className='app-container__post'>post 1</section>
        <section className='app-container__post'>post 2</section>
      </div>
    </div>
  )
}

export default App;