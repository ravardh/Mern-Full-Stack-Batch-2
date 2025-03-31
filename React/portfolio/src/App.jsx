import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Projects from "./pages/projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>

        <main className="d-flex">
          
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/edu" element={<Education />} />
            <Route path="/certi" element={<Certifications />} />
            <Route path="/pro" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
};

export default App;
