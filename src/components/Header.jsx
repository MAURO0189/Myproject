import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevenir scroll cuando el menú está abierto
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0  bg-gray-900 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="group flex items-center gap-2 no-underline" to="/">
            <div className="relative">
              <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-blue-400 transition-all duration-300">
                MY
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </Link>

          <button
            className="relative w-10 h-10 flex flex-col justify-center items-center group"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Menú de pantalla completa */}
      <div
        className={`fixed inset-0 bg-gray-900 z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="container mx-auto h-full flex items-center justify-center">
          <nav className="text-center">
            <ul className="space-y-8">
              <li className="transform transition-all duration-300 hover:scale-110">
                <Link
                  to="/"
                  className="text-4xl font-bold text-white no-underline hover:text-blue-400 transition-colors flex items-center gap-4"
                  onClick={toggleMenu}
                >
                  <i className="fas fa-home"></i>
                  <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-blue-400 transition-all duration-300">
                    HOME
                  </span>
                </Link>
              </li>
              <li className="transform transition-all duration-300 hover:scale-110">
                <Link
                  to="/aboutOf"
                  className="text-4xl font-bold text-white no-underline hover:text-blue-400 transition-colors flex items-center gap-4"
                  onClick={toggleMenu}
                >
                  <i className="fas fa-user"></i>
                  <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-blue-400 transition-all duration-300">
                    ABOUT ME
                  </span>
                </Link>
              </li>
              <li className="transform transition-all duration-300 hover:scale-110">
                <Link
                  to="/projects"
                  className="text-4xl font-bold text-white no-underline hover:text-blue-400 transition-colors flex items-center gap-4"
                  onClick={toggleMenu}
                >
                  <i className="fas fa-briefcase"></i>
                  <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-blue-400 transition-all duration-300">
                    PROJECTS
                  </span>
                </Link>
              </li>
              <li className="transform transition-all duration-300 hover:scale-110">
                <Link
                  to="/contact"
                  className="text-4xl font-bold text-white no-underline hover:text-blue-400 transition-colors flex items-center gap-4"
                  onClick={toggleMenu}
                >
                  <i className="fas fa-address-book"></i>
                  <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-blue-400 transition-all duration-300">
                    CONTACT
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
