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
      <header className="header">
        <div className="header__logo">
          {/* Coloca aquí tu logo o nombre del sitio */}
          <i className="fas fa-solid fa-code"></i> MAURO DEV
        </div>
        <button className="header__menuButton" onClick={toggleSidebar}>
          {/* Ícono de menú (puedes usar otro o un componente de ícono) */}
          <i className="fas fa-bars"></i>
        </button>
        {/* Renderizar el sidebar condicionalmente */}
        {sidebarOpen && (
          <div className="sidebar">
            {/* Contenido del sidebar */}
            <ul>
              <li>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <i className=" fas fa-user" style={{ marginRight: "8px" }}></i>
                <Link
                  to="/aboutOf"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  ABOUT ME
                </Link>
              </li>
              <li>
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
              <li>
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
              {/* Ícono de cerrar (puedes usar otro o un componente de ícono) */}
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
