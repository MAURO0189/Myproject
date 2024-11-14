import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white pt-10 pb-5 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 mb-4">
          Building ideas into digital solutions.
        </p>
      </div>
      <div className="text-gray-500 text-sm text-center mt-8">
        © {new Date().getFullYear()} Mauro Dev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
