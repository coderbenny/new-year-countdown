// App.js
import React from 'react';
import './App.css';  // Your existing styles
import NewYearCountdown from './NewYearCountdown';
import Socials from './Socials';

function App() {
  return (
    <div className='min-h-screen flex-column items-center text-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-body'>
      <Socials />
      <div className='flex-column text-center'>
        <img src='./moon-logo-new.png' alt='logo' className='h-40 w-40 rounded-sm mx-auto mb-5' />
        <h1 className='text-7xl font-bold mb-4'>Moon Studios Empire</h1>
        <p className='text-4xl tracking-wider mb-8'>Celebrate the New Year with us!</p>
        <NewYearCountdown />
      </div>
    </div>
  );
}

export default App;
