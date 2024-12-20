import React from "react";
import Header from "./Header";
import Icons from "./Icons";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contact
        </h1>
        <section className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Mauro Alexis Yepes Blandon
            </h2>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-600">
                <i className="fas fa-envelope"></i>
                <span>mauroy711@gmail.com, mauroyepes73@gmail.com</span>
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <i className="fas fa-phone"></i>
                <span>(+57) 304 438 0796, (+57) 305 451 1913</span>
              </p>
            </div>
            <Icons />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
