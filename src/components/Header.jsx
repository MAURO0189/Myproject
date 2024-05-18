import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/header.css";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <header className="header bg-dark text-white p-3 px-5 mb-3 mt-2 d-flex justify-content-between align-items-center">
        <div className="header__logo container">
          <Link className="navbar-brand" to="/">
            <i className="fas fa-solid fa-code"></i> MAURO DEV
          </Link>
        </div>
        <button
          className="header__menuButton btn btn-outline-light"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleSidebar}
        >
          <i className="fas fa-bars"></i>
        </button>
        {sidebarOpen && (
          <div className="sidebar position-fixed top-0 start-0 bg-dark text-white vh-100 p-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <i className=" fas fa-user" style={{ marginRight: "8px" }}></i>
                <Link
                  to="/aboutOf"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  ABOUT ME
                </Link>
              </li>
              <li className="nav-item">
                <i
                  className=" fas fa-solid fa-briefcase"
                  style={{ marginRight: "8px" }}
                ></i>
                <Link
                  to="/projects"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <i
                  className=" fas fa-regular fa-address-book"
                  style={{ marginRight: "8px" }}
                ></i>
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            <button className="sidebar__closeButton" onClick={closeSidebar}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
