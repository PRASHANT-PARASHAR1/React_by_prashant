import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
            </>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route
          path="/reservation"
          element={<Reservation />}
        />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
}

export default App;