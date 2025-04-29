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
    <Router>
      <Navbar />
      <Routes>
        {/* ✅ This line was commented out – now it's active */}
        <Route path="/" element={<Home />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
