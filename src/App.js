import React from "react";
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <About />
        <Project />
        <Resume />
        <Contact />
        <GoToTop />
        <Footer />
    </div>
  );
}

export default App;
