import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Projects() {
  const projectData = [
    {
      imgSrc: "/img/Vdr1.jpg",
      title: "VDR",
      description:
        "An app for querying vehicle and individual data in RUNT, a governmental information center.",
    },
    {
      imgSrc: "/img/Score.png",
      title: "Score-Risk",
      description:
        "A program to calculate a person's risk before selling them an insurance policy.",
    },
    {
      imgSrc: "/img/login.png",
      title: "Login",
      description:
        "Authorization login with custom authentication system using NestJS backend and ReactJS frontend.",
    },
    {
      imgSrc: "/img/Register.png",
      title: "Register",
      description:
        "User registration with CRUD operations using NestJS backend and ReactJS frontend.",
    },
  ];

  return (
    <>
      <Header />
      <div className=" mx-auto mt-10 px-6 my-6 min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          My Projects
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-center">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
