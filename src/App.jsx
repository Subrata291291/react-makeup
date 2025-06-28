import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Routes, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Services from '../src/pages/Services';
import Portfolio from '../src/pages/Portfolio';
import Blog from '../src/pages/Blog';
import Contact from '../src/pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';
import CommonBanner from './components/CommonBanner';
import BlogContent from './components/BlogContent';
import SingleBlog from './components/SingleBlog';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <CommonBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog" element={<BlogContent />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        {/* Add more routes here */}
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
