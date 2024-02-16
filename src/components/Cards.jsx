import React from "react";
import "../assets/style/cards.css";

function Cards() {
  return (
    <>
      <div className="cards-container">
        <div className="card">
          <img src="/img/Vdr1.jpg" alt="img1" />
          <p>
            Vdr is an app for querying vehicle and individual data in RUNT,
            which is a governmental information center.
          </p>
        </div>
        <div className="card">
          <img src="/img/Score.png" alt="img2" />
          <p>
            Score is a program used to calculate a person's risk before selling
            them an insurance policy.
          </p>
        </div>
        <div className="card">
          <img src="/img/login.png" alt="img3" />
          <p>
            Login for access authorization, with its own authentication system
            on the backend using NestJS and frontend in ReactJS.
          </p>
        </div>
        <div className="card">
          <img src="/img/Register.png" alt="img4" />
          <p>
            Register to register, update, and delete users, with backend in
            NestJS and frontend in ReactJS.
          </p>
        </div>
        <div className="card">
          <img src="/img/propuesta.png" alt="img5" />
          <p>Proposal for development in a work environment.</p>
        </div>
      </div>
    </>
  );
}

export default Cards;
