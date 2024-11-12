import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white pt-10 pb-5 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Mauro Dev...</h1>
        <p className="text-gray-400 mb-4">
          Building ideas into digital solutions.
        </p>
      </div>

      {/* Animación de olas */}
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      <div className="text-gray-500 text-sm text-center mt-8">
        © {new Date().getFullYear()} Mauro Dev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
