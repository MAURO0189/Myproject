import React from "react";
import "../assets/style/contac.css";
import Header from "./Header";
import Icons from "./Icons";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <Header />
      <h1 className="title1">Contact</h1>
      <section>
        <div className="contact-container">
          <div>
            <h1>Mauro Alexis Yepes Blandon</h1>
            <p>Email: mauroy711@gmail.com, mauroyepes73@gmail.com</p>
            <p>Mobile: (+57)3044380796, (+57)3054511913</p>
            {/* Puedes agregar más información de contacto según sea necesario */}
          </div>
        </div>
        <Icons />
      </section>
      <Footer />
    </>
  );
}

export default Contact;
