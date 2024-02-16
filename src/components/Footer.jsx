import React from "react";
import "../assets/style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="title2 ">Mauro Dev...</h1>
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#333"
          fillOpacity="1"
          d="M0,32L48,53.3C96,75,192,117,288,128C384,139,480,117,576,117.3C672,117,768,139,864,176C960,213,1056,267,1152,266.7C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </footer>
  );
};

export default Footer;
