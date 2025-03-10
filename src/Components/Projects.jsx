import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Projects = () => {
  useEffect(() => {
    document.title = "Portfolio | Projects";
  }, []);
  const projects = [
    {
      title: "Real-Time Chat App",
      description:
        "A real-time chat application that allows users to create private rooms with password protection. Features include live messaging, online status indicators, and message history storage.",
      tech: "React, Node.js, Socket.IO, MySQL",
      github: "https://github.com/ajay123-k",
    },
    {
      title: "E-commerce Order Management System",
      description:
        "A fully functional e-commerce order management system where vendors can list products, manage orders, and process transactions with secure payment gateway integrations.",
      tech: "React, Node.js, Prisma, MySQL",
      github: "https://github.com/ajay123-k",
    },
    {
      title: "Freelance Job Portal",
      description:
        "A job marketplace that connects freelancers with clients. Users can create profiles, post jobs, bid on projects, and handle payments through Stripe integration.",
      tech: "React, Node.js, Prisma, MySQL, Stripe",
      github: "https://github.com/ajay123-k",
    },
    {
      title: "MERN Stack Image Upload",
      description:
        "A secure image upload platform with authentication. Users can register, log in, upload images, and view a gallery of uploaded images stored in MongoDB with cloud storage support.",
      tech: "React, Node.js, Prisma, MySQL",
      github: "https://github.com/ajay123-k",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-800 dark:bg-gray-900 text-white min-h-screen px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-blue-400">
          My Projects
        </h2>
        <p className="text-center text-gray-300 mt-4 max-w-3xl mx-auto">
          A showcase of my work in full-stack development, covering real-time
          communication,e-commerce, and secure file uploads.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-600 p-6 rounded-xl shadow-lg transition-all flex flex-col justify-between hover:shadow-blue-500/50 cursor-pointer hover:scale-105"
              title={`${project.title}`}
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-400">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-gray-300">
                  {project.description}
                </p>
                <p className="mt-2 text-xs text-gray-400 italic">
                  Tech Stack: {project.tech}
                </p>
              </div>
              <div className="flex justify-between mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-all text-sm"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer bg={"bg-gray-900 dark:bg-gray-800"} />
    </>
  );
};

export default Projects;
