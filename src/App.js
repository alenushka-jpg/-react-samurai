import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Messenger from './components/Dialogs/Messenger';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Header/>
        <Navigation/>
        <div className='app-container__content'>
          <Routes>
            <Route path='/dialogs/*' element={<Messenger/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;