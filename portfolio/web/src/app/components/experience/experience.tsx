import { FC, useState } from 'react';
import IMG1 from "../images/Screenshot 2025-05-05 013711.png";
import IMG2 from "../images/firespring.png";
import IMG3 from "../images/nebraska-n.jpg";

export const Experience: FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      title: "Diary App",
      description: "In development",
      longDescription: "This is a diary app that allows users to create, read, update, and delete diary entries. It uses React.js for the frontend and Express.js with MySQL for the backend.",
      repoLink: "https://github.com/K41L3r14/466-Personal-Diary"
    },
    {
      title: "Music Generator App",
      description: "September 2023",
      longDescription: "This app displays a list of songs to the user based on the user's taste in music. It uses React.js for the frontend.",
    },
    {
      title: "World Travel App",
      description: "May 2024",
      longDescription: "This app allows users to explore and plan different travel destinations. It uses Kivy for the frontend and Python with MySQL for the backend.",
    },
    {
      title: "Burn Plan App",
      description: "December 2022",
      longDescription: "This app allows users to create and manage burn plans for controlled burns. It uses Java for the backend.",
    }
  ];
  return (
    <section
        id="experience"
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center mb-8">EXPERIENCE</h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/3">
          <h4 className="text-lg font-semibold mb-4 text-green-600">EDUCATION / EXPERIENCE</h4>
        </div>
        <div className="md:w-2/3">
          <ul className="space-y-8">
            <li className="flex items-start space-x-4">
              <img 
                src={IMG3} 
                alt="University of Nebraska" 
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
              <div>
                <h5 className="font-semibold">2022-Present</h5>
                <p className="text-gray-700">University of Nebraska - Lincoln - Software Engineering</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <img 
                src={IMG2} 
                alt="Firespring" 
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
              <div>
                <h5 className="font-semibold">2024-Present</h5>
                <p className="text-gray-700">Firespring - Software Engineering Intern</p>
              </div>
            </li>
            <li className="flex items-start space-x-8">
              <img 
                src={IMG1} 
                alt="PrivyAI" 
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
              <div>
                <h5 className="font-semibold">2024-2025</h5>
                <p className="text-gray-700">PrivyAI - Software Developer</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16">
        <h4 className="text-lg font-semibold mb-8 text-green-600">PROJECTS</h4>
        <ul className="flex flex-wrap justify-center gap-8" >
          {projects.map((project, index) => (
            <li
              key={index}
              className="cursor-pointer bg-gray-100 p-8 rounded-lg shadow-md hover:bg-gray-200 transition"
              onClick={() => setSelectedProject(project.title)}
            >
              <h5 className="font-semibold">{project.title}</h5>
              <p className="text-gray-700">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h4 className="text-xl font-bold mb-4">{selectedProject}</h4>
            <p className="text-gray-700">
              {
                projects.find((project) => project.title === selectedProject)
                  ?.description
              }
            </p>
            <p className="text-gray-600">
              {
                projects.find((project) => project.title === selectedProject)
                  ?.longDescription
              }
            </p>
            {projects.find((project) => project.title === selectedProject)?.repoLink && (
              <a
                href={projects.find((project) => project.title === selectedProject)?.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-4 block"
              >
                View Repository
              </a>
            )}
            <button
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;