import React from "react";
import Header from "./Header";
import "../assets/style/style.css";
import "../assets/style/home.css";
import Icons from "./Icons";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <main className="container-home container mt-5">
        <h1 className="title1  text-center mb-2">WELCOME</h1>
        <section id="about" className="content-card mb-5">
          <div className="banner-container d-flex flex-column justify-content-center">
            <img
              src="/img/banner2.jpg"
              alt="banner2"
              className="card-img"
              style={{ borderRadius: "20px" }}
            />
            <div className="banner-text">
              <h2>
                <b>HEY, I'M MAURO YEPES.</b>
              </h2>
              <p>
                <i className="fas fa-solid fa-terminal"></i> Hi there! I am a
                full stack developer based in the beautiful city of Medellin.
              </p>
            </div>
          </div>
        </section>
        <Icons />
      </main>
      <Footer />
    </>
  );
}

export default Home;
