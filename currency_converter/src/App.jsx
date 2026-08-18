import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About'
import Contact from './pages/Contact'
import Fooditems from './pages/Fooditems'
import Reservation from './pages/Reservation'

function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar />
     <Header />
     <Footer />
     <Routes>
      <Route path="About"element={<About />} />
      <Route path="Contact"element={<Contact />} />
      <Route path="Fooditems"element={<Fooditems />} />
      <Route path="Reservation"element={<Reservation />} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
