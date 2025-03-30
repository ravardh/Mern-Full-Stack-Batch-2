import React from "react";
import Header from "./components/header";
import About from "./pages/about";
import Education from "./pages/education";
import Projects from "./pages/projects";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Experience from "./pages/experience";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Footer />
      <Education />
      <Experience />
    </>
  );
};

export default App;
