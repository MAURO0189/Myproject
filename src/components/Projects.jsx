import React from "react";
import Header from "./Header";
import "../assets/style/projects.css";
import Cards from "./Cards";
import Footer from "./Footer";

function Projects() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1 className="title1 text-center mb-4">projects</h1>
        <section className="body">
          <ul className="accordion">
            <li>
              <img src="/img/Vdr1.jpg" alt="img1" />
              <div className="content">
                <span>
                  <h2>VDR</h2>
                </span>
              </div>
            </li>
            <li>
              <img src="/img/Score.png" alt="scoreRisk" />
              <div className="content">
                <span>
                  <h2>Score-Risk</h2>
                </span>
              </div>
            </li>
            <li>
              <img src="/img/login.png" alt="login" />
              <div className="content">
                <span>
                  <h2>Login</h2>
                </span>
              </div>
            </li>
            <li>
              <img src="/img/Register.png" alt="register" />
              <div className="content">
                <span>
                  <h2>Register</h2>
                </span>
              </div>
            </li>
          </ul>
        </section>
        <h1 className="title1 text-center mt-5">Description</h1>
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default Projects;
