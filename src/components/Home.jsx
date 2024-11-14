import React from "react";
import Header from "./Header";
import Icons from "./Icons";
import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-emerald-800">
          WELCOME
        </h1>

        {/* Hero Section with Avatar */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar Container */}
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-emerald-400/20 shadow-xl">
                  <img
                    src="/api/placeholder/192/192"
                    alt="Mauro Yepes"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-emerald-300 rounded-full opacity-20"></div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-bold text-white mb-4">
                  HEY, I'M MAURO YEPES
                </h2>
                <p className="text-emerald-100 text-lg mb-6">
                  Fullstack Developer based in Medellín 🌟
                </p>
              </div>
            </div>

            {/* Code-like Decorative Element */}
            <div className="mt-8 text-emerald-200 font-mono text-sm opacity-60">
              <p>const developer = &#123;</p>
              <p className="ml-4">passion: "Frontend Development",</p>
              <p className="ml-4">location: "Medellín, Colombia",</p>
              <p className="ml-4">status: "Ready for new challenges"</p>
              <p>&#125;;</p>
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
