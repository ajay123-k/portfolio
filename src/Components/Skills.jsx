import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: "⚛️" },
      { name: "Tailwind ", icon: "🎨" },
      { name: "Angular ", icon: "🅰️" },
      { name: "Bootstrap", icon: "🎨" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "⬢" },
      { name: "Express.js", icon: "🚀" },
      { name: "Prisma ORM", icon: "🛆" },
      { name: "Socket.IO", icon: "📡" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: "🐬" },
      { name: "MongoDB", icon: "🌿" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "💾" },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: "🔗" },
      { name: "WebSockets", icon: "⚡" },
      { name: "Puppeteer", icon: "🤖" },
      { name: "Postman", icon: "📨" },
    ],
  },
];

const proficiency = [
  { name: "React.js", level: "70%" },
  { name: "Node.js", level: "85%" },
  { name: "MySQL", level: "80%" },
  { name: "MongoDB", level: "75%" },
  { name: "Express.js", level: "85%" },
  { name: "Socket.IO", level: "50%" },
];

const Skills = () => {
  useEffect(() => {
    document.title = "Portfolio | Skills";
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 dark:bg-gray-900 text-white  px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-blue-400">
          My Technical Skills
        </h2>
        <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">
          I specialize in building scalable and efficient web applications,
          working with both frontend and backend technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-gray-600 p-6 rounded-xl shadow-lg transition-all  hover:shadow-blue-500/50 cursor-pointer hover:scale-105"
              title={`${skill.category}`}
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-300 text-md hover:text-white transition-all"
                  >
                    <span
                      className={`${
                        item.name === "Node.js"
                          ? "text-green-500"
                          : "text-blue-500"
                      }`}
                    >
                      {item.icon}
                    </span>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" px-6 bg-gray-900 dark:bg-gray-800 text-white py-20 ">
        <h2 className="text-4xl font-bold text-center text-blue-400 ">
          Skill Proficiency
        </h2>
        <p className="text-center my-3">
          An overview of my technical expertise across various frontend,
          backend, and database technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          {proficiency.map((skill, index) => (
            <div key={index} className="mb-4">
              <h4
                className="text-lg font-semibold text-gray-300 cursor-pointer"
                title={`${skill.name} ${skill.level}`}
              >
                {skill.name}
              </h4>
              <div className="w-full bg-gray-700 rounded-full h-3 cursor-pointer">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  title={`${skill.name} ${skill.level}`}
                  style={{
                    width: `${skill.level}`,
                  }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm mt-1">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer bg="bg-gray-800 dark:bg-gray-900" />
    </>
  );
};

export default Skills;
