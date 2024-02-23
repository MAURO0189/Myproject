import React from "react";
import "../assets/style/icons.css";

function Icons() {
  return (
    <>
      <section>
        <div>
          <ul className="wrapper">
            <li className="icon instagram">
              <a
                href="https://www.instagram.com/blandonmauro?utm_source=qr&igsh=aXNremJwancxaDBo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tooltip">Instagram</span>
                <span>
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            </li>
            <li className="icon github">
              <a
                href="https://github.com/MAURO0189"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tooltip">Github</span>
                <span>
                  <i className="fab fa-github"></i>
                </span>
              </a>
            </li>
            <li className="icon linkedin">
              <a
                href="https://www.linkedin.com/in/mauro-alexis-yepes-blandon-b7463a242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tooltip">LinkedIn</span>
                <span>
                  <i className="fab fa-linkedin"></i>
                </span>
              </a>
            </li>
            <li className="icon whatsapp">
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tooltip">Whatsapp</span>
                <i className=" fab fa-brands fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Icons;
