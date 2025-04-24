import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './screens/Navbar';
import Banner from './screens/Banner';
import Homepurchase from './screens/Homepurchase';
import Howitworks from './screens/Howitworks';
import Estatebrokerage from './screens/Estatebrokerage';
import Testimonial from './screens/Testimonial';
import Calculator from './Calculator';



function Home() {
  return (
    <>
      <Banner />
      <Homepurchase />
      <Howitworks />
      <Estatebrokerage />
      <Testimonial />
      <Calculator />
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
      </Routes>
    </Router>
  );
}

export default App;
