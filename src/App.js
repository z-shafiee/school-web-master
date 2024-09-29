import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './component/Header/Navbar/Navbar';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
      

        <Navbar />
        <Outlet />
        <Footer />
     
    </div>
  );
}

export default App;
