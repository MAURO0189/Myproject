// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../assets/style/header.css";

// function Header() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   return (
//     <>
//       <header className="header bg-dark text-white p-3 px-5 mb-3 mt-2 d-flex justify-content-between align-items-center">
//         <div className="header__logo container">
//           <Link className="navbar-brand" to="/">
//             <i className="fas fa-solid fa-code"></i> MAURO DEV
//           </Link>
//         </div>
//         <button
//           className="header__menuButton btn btn-outline-light"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//           onClick={toggleSidebar}
//         >
//           <i className="fas fa-bars"></i>
//         </button>
//         {sidebarOpen && (
//           <div className="sidebar position-fixed top-0 start-0 bg-dark text-white vh-100 p-3">
//             <ul className="nav flex-column">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link text-white">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <i className=" fas fa-user" style={{ marginRight: "8px" }}></i>
//                 <Link
//                   to="/aboutOf"
//                   style={{ textDecoration: "none", color: "inherit" }}
//                 >
//                   ABOUT ME
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <i
//                   className=" fas fa-solid fa-briefcase"
//                   style={{ marginRight: "8px" }}
//                 ></i>
//                 <Link
//                   to="/projects"
//                   style={{ textDecoration: "none", color: "inherit" }}
//                 >
//                   PROJECTS
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <i
//                   className=" fas fa-regular fa-address-book"
//                   style={{ marginRight: "8px" }}
//                 ></i>
//                 <Link
//                   to="/contact"
//                   style={{ textDecoration: "none", color: "inherit" }}
//                 >
//                   CONTACT
//                 </Link>
//               </li>
//             </ul>
//             <button className="sidebar__closeButton" onClick={closeSidebar}>
//               <i className="fas fa-times"></i>
//             </button>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

// export default Header;

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
          <Link
            className="text-2xl font-bold flex no-underline items-center gap-2 hover:text-blue-400 transition-colors duration-300"
            to="/"
          >
            <i className="fas fa-code"></i>
            <span>MAURO DEV</span>
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
                  <span>HOME</span>
                </Link>
              </li>
              <li className="transform transition-all duration-300 hover:scale-110">
                <Link
                  to="/aboutOf"
                  className="text-4xl font-bold text-white no-underline hover:text-blue-400 transition-colors flex items-center gap-4"
                  onClick={toggleMenu}
                >
                  <i className="fas fa-user"></i>
                  <span>ABOUT ME</span>
                </Link>
              </li>
              <li className="transform transition-all duration-300 hover:scale-110">
                <Link
                  to="/projects"
                  className="text-4xl font-bold text-white no-underline hover:text-blue-400 transition-colors flex items-center gap-4"
                  onClick={toggleMenu}
                >
                  <i className="fas fa-briefcase"></i>
                  <span>PROJECTS</span>
                </Link>
              </li>
              <li className="transform transition-all duration-300 hover:scale-110">
                <Link
                  to="/contact"
                  className="text-4xl font-bold text-white no-underline hover:text-blue-400 transition-colors flex items-center gap-4"
                  onClick={toggleMenu}
                >
                  <i className="fas fa-address-book"></i>
                  <span>CONTACT</span>
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
