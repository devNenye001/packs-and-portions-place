import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/hero/hero';
import Menu from './components/menu/menu';
import FinalCTA from './components/finalCTA/finalCTA';
import Contact from './pages/contact/contact';
import Gallery from './pages/gallery/gallery';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';


function App() {
  return (
    <Router>
      <div className="app-container" style={{ fontFamily: '"Rethink Sans", sans-serif' }}>
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;