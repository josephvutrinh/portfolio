import React from 'react'
import HomePage from './components/HomePage.jsx'
import './App.css'
import MainContentScreen from './components/MainContentScreen.jsx'
import Socials from './components/socials.jsx'


function App() {
  return (
    <div className='bg-white-300'>
      <div className='gradient-background'>
        <HomePage/>
      </div>
      <svg class="svg-curve" viewBox="0 0 1440 79" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"></path>
      </svg>
      <MainContentScreen/>
      <svg class="svg-curve" viewBox="0 0 1440 79" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487 0V79H-100V0Z"></path>
      </svg>
      <footer className='bg-purple-200'>
        <Socials/>
      </footer>
    </div>
  )
}

export default App
