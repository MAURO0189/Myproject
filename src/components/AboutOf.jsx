import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../assets/style/aboutOf.css";
import Header from "./Header";
import Footer from "./Footer";

function AboutOf() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && !chartRef.current.chart) {
      const data = {
        labels: ["JavaScript", "Node.js", "React.js", "Nest.js", "MySQL"],
        datasets: [
          {
            label: "Skill level",
            data: [70, 70, 80, 75, 50],
            backgroundColor: [
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderColor: [
              "rgba(255, 206, 86, 1.2)",
              "rgba(75, 192, 192, 1.2)",
              "rgba(54, 162, 235, 1.2)",
              "rgba(255, 99, 132, 1.2)",
              "rgba(153, 102, 255, 1.2)",
            ],
          },
        ],
      };

      const config = {
        type: "bar",
        data: data,
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              grid: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
          layout: {
            padding: 10,
          },
        },
      };

      const ctx = chartRef.current.getContext("2d");
      chartRef.current.chart = new Chart(ctx, config);
    }
  }, []);
  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1 className="title1">About Me.</h1>
        <section className="row mb-5 section justify-content-between">
          <div className="col-md-6 mb-4 about-column">
            <h2>Profile</h2>
            <p>
              "I am Mauro Yepes, 35 years old, and I love programming. I have
              formal education in residential electricity, automotive mechanics,
              automotive mechatronics, and software development. I also have
              specific courses in hybrid and electric vehicles, and in software
              development courses such as JavaScript, Node.js, React.js,
              Nest.js, and MySQL. Additionally, I have participated in
              development projects and have developed small projects to enhance
              my skills in software development."
            </p>
            <div>
              <h3>Skills</h3>
              <canvas
                ref={chartRef}
                id="skillsChart"
                width="400"
                height="200"
              ></canvas>
            </div>
          </div>
          <div className="col-md-6 about-column d-flex justify-content-center align-items-center">
            <img
              src="/img/pictureProfile.jpeg"
              alt="pictureProfile"
              className="profile-image img-fluid"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutOf;
