import React from 'react';
import SideMenu from './components/layouts/SideMenu';
import './App.css';
import Navbar from './components/layouts/Navbar';

function App() {
  return (
    <div className='main-div'>
      <SideMenu className='column' />
      <div className='column'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
