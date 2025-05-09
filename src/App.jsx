import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './screens/Inc/Navbar';
import Footer from './screens/Inc/Footer';
import Banner from './screens/Banner';
import Homepurchase from './screens/Homepurchase';
import Howitworks from './screens/Howitworks';
import Estatebrokerage from './screens/Estatebrokerage';
import Testimonial from './screens/Testimonial';
import Calculator from './screens/Calculator';
import Wordclass from './screens/Worldclass';
import Buyingthink from './screens/Buyingthink';
import FAQ from './screens/FAQ';
import Contactus from './screens/Contactus';
import Downpaymentqualification from './screens/Downpaymentqualification';
import Career from './screens/Career';




function Home() {
  return (
    <>
      <Banner />
      <Homepurchase />
      <Howitworks />
      <Estatebrokerage />
      <Testimonial />
      <Calculator />
      <Wordclass />
      <Buyingthink />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <Router basename="/sukhanestates">
      <Navbar />
      <Routes>
        {/* ✅ This line was commented out – now it's active */}
        <Route path="/" element={<Home />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Downpaymentqualification" element={<Downpaymentqualification />} />
        <Route path="/Career" element={<Career />} />
      
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
