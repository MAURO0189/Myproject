import React from "react";
import Header from "./Header";
import Icons from "./Icons";
import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          WELCOME
        </h1>
        <section className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/img/banner2.jpg"
              alt="banner"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                HEY, I'M MAURO YEPES.
              </h2>
              <p className="text-white text-lg flex items-center gap-2">
                <i className="fas fa-terminal"></i>
                Hi there! I am a full stack developer based in the beautiful
                city of Medellin.
              </p>
            </div>
          </div>
        </section>
        <Icons />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
