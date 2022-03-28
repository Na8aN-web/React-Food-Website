import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/menu" element={<Menu />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    
     </div>
  );
}

export default App;
