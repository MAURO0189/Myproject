import React, { useState } from "react";
import "../assets/style/propouse.css";

function Sidebar() {
  const [isSidebarlOpen, setIsSidebarlOpen] = useState(false);

  const toggleSidebarl = () => {
    setIsSidebarlOpen(!isSidebarOpen);
  };

  return (
    <div>
      <header>
        <nav className="navbar02">
          <div className="navbar-header02">
            <button className="navbar-toggle02" onClick={toggleSidebarl}>
              ☰
            </button>
            <a className="navbar-brand02" href="#">
              Capacitación Satelital
            </a>
          </div>
        </nav>

        <div className={`sidebar ${isSidebarlOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={toggleSidebarl}>
            &times;
          </button>
          <h1>Capacitación Satelital</h1>
          <ul>
            <li>
              <a href="#">Recursos</a>
              <ul>
                <li>
                  <a href="#">Modulo 1</a>
                </li>
                <li>
                  <a href="#">Modulo 2</a>
                </li>
                <li>
                  <a href="#">Modulo 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Documentación</a>
              <ul>
                <li>
                  <a href="#">Descargables</a>
                </li>
                <li>
                  <a href="#">Infografias</a>
                </li>
                <li>
                  <a href="#">Glosario</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Contacto</a>
              <ul>
                <li>
                  <a href="#">Contacto 1</a>
                </li>
                <li>
                  <a href="#">Contacto 2</a>
                </li>
                <li>
                  <a href="#">Contacto 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="content02">
          {/* Contenido principal de tu página aquí */}
        </div>
      </header>

      <section>
        <video className="banner02" src="videos/capitulo1.mp4" controls></video>
      </section>

      <footer>
        <div className="footer-content02">
          <p>contacto</p>
          <br />
          <p>Derechos Reservados &copy; 2024 Capacitación Satelital</p>
        </div>
      </footer>
    </div>
  );
}

export default Sidebar;
