import React, { useState } from 'react';
import Layout from "../components/Layout";
import projects from "../data/Projects";

interface Project {
  title: string;
  date: string;
  description: string;
  longDescription: string;
  image: string;
  repoLink: string;
  liveLink?: string;
  tech: string[];
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Layout>
      <div>
        {/* Promo Section */}
        <div
          style={{
            backgroundColor: '#f0f8ff',
            textAlign: 'center',
            padding: '30px 16px',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1e3a8a',
          }}
        >
          Portfolio
        </div>

        {/* Technical Skills Section */}
        <section className="py-12 px-4 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Technical Skills</h2>

          <div className="space-y-6">
            {/* Proficient In */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Proficient In:</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Figma",
                  "Git",
                  "HTML/CSS",
                  "JavaScript",
                  "Microsoft Excel (VBA, PivotTables)",
                  "Python",
                  "SQL",
                  "Tableau"
                ].map((skill, index) => (
                  <span key={index} className="inline-block bg-[#4682B4] text-white text-xs font-medium px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experienced With */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Experienced With:</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS (EC2, S3)",
                  "Azure",
                  "C#",
                  "C++",
                  "Linux",
                  "MySQL",
                  "Node.js",
                  "PostgreSQL",
                  "React",
                  "REST APIs",
                  "SPA Development"
                ].map((skill, index) => (
                  <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full border border-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Coursework Integration */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Coursework Integration:</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Applied project management, full-stack web development, machine learning, and database systems in Junior Core course.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-white text-center px-4">
                  <h3
                    className="text-xl font-extrabold mb-2 text-white px-3 py-1 rounded"
                    style={{ backgroundColor: "#4682B4" }}
                  >
                    {project.title}
                  </h3>
                  
                  <p className="text-sm mb-4">{project.description}</p>
                  
                  <span
                    className="inline-flex items-center gap-2 text-white py-1 px-3 rounded-full text-sm font-medium shadow-lg transition duration-300 hover:brightness-110"
                    style={{ backgroundColor: "#4682B4" }}
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-start px-4 pt-20 pb-6"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-lg max-w-2xl w-full h-[85vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 bg-gray-200 hover:bg-gray-300 p-1 rounded-full transition"
                onClick={() => setSelectedProject(null)}
                aria-label="Close Modal"
              >
                <span className="text-xl font-bold">&times;</span>
              </button>

              {/* Scrollable Modal Content */}
              <div className="p-6 pt-14">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                <h4 className="text-base font-semibold mb-4 text-gray-600">{selectedProject.date}</h4>
                <p className="text-gray-700 mb-4 whitespace-pre-line">
                  {selectedProject.longDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((item, i) => (
                    <span
                      key={i}
                      className="inline rounded-md px-2 py-1 text-xs font-medium text-white bg-[#4682B4]"
                    >
                      {item}
                    </span>
                  ))}
                </div>


                <div className="flex gap-4 mt-4">
                {/* Outlined Button - Repo */}
                <a
                  href={selectedProject.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded border border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  View Repo
                </a>

                {/* Filled Button - Live Site */}
                {selectedProject.liveLink && (
                  <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded border border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition duration-300"
                >
                    View Site
                  </a>
                )}
              </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Portfolio;
