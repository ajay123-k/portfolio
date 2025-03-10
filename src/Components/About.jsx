import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const journey = [
  {
    title: "Started Learning",
    icon: "🚀",
    description:
      "Began my journey into web development by learning HTML, CSS, and Bootstrap. Explored WordPress for building websites and gained hands-on experience in creating responsive designs. Built small projects to solidify my understanding of frontend development and user interface design.",
  },
  {
    title: "Worked on Projects",
    icon: "🛠️",
    description:
      "Built multiple frontend web applications using HTML, CSS, and Bootstrap. Developed responsive designs for a food ordering system, a library management system, and a car rental platform. Focused on improving UI/UX, implementing mobile-friendly layouts, and understanding core web development principles.",
  },

  {
    title: "Completed Graduation",
    icon: "🎓",
    description:
      "Earned my BSc in Computer Science with a 9.14 CGPA. Strengthened my knowledge in SQL databases, programming fundamentals, software testing, and algorithms. Gained a strong foundation in software development principles, preparing me for real-world problem-solving and application development.",
  },

  {
    title: "Backend Development",
    icon: "🖥️",
    description:
      "Started learning backend development with Node.js, focusing on building RESTful APIs, authentication, and database management. Gained hands-on experience with Express.js, MySQL, and MongoDB, and explored real-time communication using WebSockets. Built several projects to strengthen backend architecture and improve API performance.",
  },
  {
    title: "Started Working Professionally",
    icon: "💼",
    description:
      "Joined the industry as a MEAN Stack Developer, focusing on Node.js for backend development. Refactored a Java-based backend to Node.js using Prisma ORM, improving database efficiency. Additionally, integrated payment gateways like Stripe, PayPal, and Instamojo for seamless transactions.",
  },
  {
    title: " Full Stack Projects",
    icon: "📂",
    description:
      "Expanded my expertise by developing full-stack web applications using React for the frontend and Node.js for the backend which include E-commerce Project, Image Upload System, Freelancer Job Portal,Chat Application. These projects enhanced my understanding of RESTful APIs, authentication, real-time communication, and database management",
  },
];

const About = () => {
  useEffect(() => {
    document.title = "Portfolio | About";
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 dark:bg-gray-900 text-white min-h-screen px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-blue-400">
          My Journey
        </h2>
        <p className="text-center my-3">
          A timeline of my growth, from learning the basics to building
          full-stack applications and working professionally.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {journey.map((step, index) => (
            <div
              className="border border-gray-600 p-5 rounded-xl shadow-lg transition-all hover:shadow-blue-500/50 cursor-pointer hover:scale-105"
              key={index}
              title={`${step.title}`}
            >
              <span className="text-3xl">{step.icon}</span>
              <div>
                <h3 className="text-xl font-semibold text-blue-400">
                  {step.title}
                </h3>
                <p className="text-gray-300 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer bg={"bg-gray-900 dark:bg-gray-800"} />
    </>
  );
};

export default About;
