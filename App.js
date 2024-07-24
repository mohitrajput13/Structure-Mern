import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import Services from "./screens/Services";
import Testimonials from "./screens/Testimonials";
import Pricing from "./screens/Pricing";
import Blog from "./screens/Blog";
import ContactUs from "./screens/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
