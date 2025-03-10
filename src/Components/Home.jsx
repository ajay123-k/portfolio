import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Portfolio | Home";
  }, []);
  const skills = [
    { name: "JavaScript", icon: "⚡" },
    { name: "Bootstrap", icon: "🎨" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "React.js", icon: "⚛️" },
    { name: "Angular", icon: "🅰️" },
    { name: "Node.js", icon: "⬢" },
    { name: "Express.js", icon: "🚀" },
    { name: "Prisma ORM", icon: "🛆" },
    { name: "MySQL", icon: "🐬" },
    { name: "MongoDB", icon: "🌿" },
    { name: "Socket.IO", icon: "📡" },
    { name: "Puppeteer", icon: "🤖" },
  ];

  const projects = [
    {
      title: "Real-Time Chat App",
      desc: "Secure WebSocket-based messaging with room protection.",
      tech: "React, Node.js, Socket.IO, MySQL",
    },
    {
      title: "E-commerce OMS",
      desc: "Order & payment management system for vendors.",
      tech: "React, Express, Prisma, MySQL",
    },
    {
      title: "Freelance Job Portal",
      desc: "Connect freelancers with clients for job postings.",
      tech: "React, Node.js, MongoDB, Stripe",
    },
    {
      title: "MERN Stack Image Upload",
      desc: "Login, register & upload images with storage & viewing.",
      tech: "MERN Stack (MySQL, Express, React, Node.js)",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-gray-800 dark:bg-gray-900 text-white text-center py-24">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">
            Hi, I'm <span className="text-yellow-500">Ajay</span>
          </h1>
          <p className="text-xl mt-4">
            I specialize in building scalable, high-performance web
            applications. Passionate about coding, problem-solving, and
            continuously exploring new technologies
          </p>
          <Link
            to="/projects"
            className="mt-6 inline-block bg-blue-500 px-6 py-3 rounded-lg font-semibold"
          >
            View My Work
          </Link>
        </div>
      </div>

      {/* About Me */}
      <div className="py-20 px-6 bg-gray-900 dark:bg-gray-800 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-400">About Me</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            I'm a <strong>Full Stack Developer</strong> experienced in{" "}
            <strong>React, Node.js, MySQL, MongoDB, and Prisma</strong> . I have
            developed real-time applications, e-commerce platforms, and RESTful
            APIs.
          </p>
          <Link
            to={"/about"}
            className="mt-6 inline-block bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold"
          >
            View More
          </Link>
        </div>
      </div>

      <div className="py-20 px-6 bg-gray-800 dark:bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold text-blue-400">Skills</h2>
        <p className="text-center my-3">
          Here are the technologies and tools I have learned and worked with.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="border border-gray-600  p-5 rounded-xl flex flex-col items-center shadow-lg hover:shadow-blue-500/50 transition-all cursor-pointer hover:scale-105"
              title={`${name}`}
            >
              <span
                className={`text-3xl ${
                  name === "Node.js" ? "text-green-500" : "text-blue-500"
                }`}
              >
                {icon}
              </span>
              <span className="mt-3 text-lg font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="py-20 px-6 bg-gray-900 dark:bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold text-blue-400">Projects</h2>
        <p className="text-center my-3">
          A collection of real-world projects showcasing my skills in full-stack
          development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-600 p-6 rounded-xl shadow-lg transition-all  hover:shadow-blue-500/50 cursor-pointer hover:scale-105"
              title={`${project.title}`}
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-gray-300">{project.desc}</p>
              <p className="mt-2 text-xs text-gray-400 italic">
                {project.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer bg="bg-gray-800 dark:bg-gray-900" />
    </>
  );
};

export default Home;
