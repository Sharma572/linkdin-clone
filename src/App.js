import React from 'react';

import './App.css';
import Header from './component/Header';
import SideBar from './component/SideBar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
   
    {/* Header */}
     <Header />
    {/* App body */}
    <div className='app__body'>
    <SideBar />
      <Feed />
    </div>
       {/* widgets */}
    </div>
  );
}

export default App;
