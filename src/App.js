import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import GalleryPage from "./components/GalleryPage";
import ContactPage from "./components/ContactPage";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default Route: Hero + Gallery */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <GalleryPage />
              <ContactPage />
            </>
          }
        />
        {/* Explicit Gallery Page */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
