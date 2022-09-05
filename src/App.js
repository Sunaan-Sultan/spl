
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard/dashboard.js'
import Announcements from './pages/announcements/announcements.js'
import Createteam from './pages/createteam/createteam.js'
import Login from './pages/login/login'
import Signup from './pages/signup/signup.js'
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
// import Sidebar from './components/sidebar.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
      <div className='container'>
        <Navbar />
      {/* <Sidebar />        */}
          <Routes>
            <Route exact path="/" element={<Dashboard/>} />
            <Route path="/createteam" element={<Createteam/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/announcements" element={<Announcements/>}/>          
          </Routes> 
      </div>          
      </BrowserRouter>
    </div>
  );
}

export default App;
