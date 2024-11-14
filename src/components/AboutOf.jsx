import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Header from "./Header";
import Footer from "./Footer";

function AboutOf() {
  const skillsData = [
    { name: "JavaScript", level: 70, color: "#FFD43B" },
    { name: "Node.js", level: 70, color: "#68D391" },
    { name: "React.js", level: 80, color: "#4299E1" },
    { name: "Nest.js", level: 75, color: "#FC8181" },
    { name: "MySQL", level: 50, color: "#9F7AEA" },
    { name: "Tailwind", level: 70, color: "#9F7AEA" },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow-lg rounded border">
          <p className="text-gray-800 font-medium">{`${payload[0].payload.name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
      <Header />

      <main className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Me.
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Columna de información */}
          <div className="space-y-8">
            <section className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile</h2>
              <p className="text-gray-600 leading-relaxed">
                I am Mauro Yepes, 35 years old, and I love programming. I have
                formal education in residential electricity, automotive
                mechanics, automotive mechatronics, and software development. I
                also have specific courses in hybrid and electric vehicles, and
                in software development courses such as JavaScript, Node.js,
                React.js, Nest.js, and MySQL. Additionally, I have participated
                in development projects and have developed small projects to
                enhance my skills in software development.
              </p>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={skillsData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                  >
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                      dataKey="level"
                      radius={[0, 8, 8, 0]}
                      fill="#4299E1"
                      background={{ fill: "#f3f4f6" }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>
          </div>

          {/* Columna de imagen */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <img
                src="/img/pictureProfile.jpeg"
                alt="Mauro Yepes profile"
                className="w-full h-auto rounded-2xl shadow-lg object-cover transform transition duration-500 group-hover:scale-[1.01]"
              />

              {/* Overlay con información adicional */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">Mauro Yepes</h3>
                <p className="text-gray-200">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección adicional de tecnologías */}
        <section className="mt-16 max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-gray-50 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                <div className="text-4xl mb-2">
                  {skill.name === "JavaScript" && (
                    <i className="fab fa-js text-yellow-400"></i>
                  )}
                  {skill.name === "Node.js" && (
                    <i className="fab fa-node text-green-600"></i>
                  )}
                  {skill.name === "React.js" && (
                    <i className="fab fa-react text-blue-400"></i>
                  )}
                  {skill.name === "Nest.js" && (
                    <i className="fas fa-code text-red-400"></i>
                  )}
                  {skill.name === "MySQL" && (
                    <i className="fas fa-database text-purple-500"></i>
                  )}
                  {skill.name === "Tailwind" && (
                    <i className="fas fa-code text-indigo-400"></i>
                  )}
                </div>
                <h3 className="font-medium text-gray-800">{skill.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{skill.level}%</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutOf;
