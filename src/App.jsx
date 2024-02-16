import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutOf from "./components/AboutOf";
import Contact from "./components/Contact";
import Propouse from "./components/Propouse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutOf" element={<AboutOf />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/propouse" element={<Propouse />} />
      </Routes>
    </Router>
  );
}

export default App;
