import { useRef } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedBackground from "../components/AnimatedBackground";


export default function Experience() {
  const projectRef = useRef(null);

  const handleScrollToProjects = () => {
    toast.info("Scrolling to Projects...", {
      position: "top-center",
      autoClose: 1200,
    });

    setTimeout(() => {
      projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 1300); // wait for toast before scroll
  };

  return (
    <motion.div
      className="p-6 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-pink-500">Experience</h2>

      <div className="space-y-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Junior Full Stack Developer</h3>
          <p className="text-gray-400">Tech C Mantix| 2025 - Present</p>
          <ul className="list-disc pl-5 mt-2 text-gray-300">
            <li>Developed responsive UI using React and Tailwind CSS</li>
            <li>Improved performance and SEO by optimizing routes</li>
            <li>Worked closely with designers and backend team</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Intern - Web Development</h3>
          <p className="text-gray-400">T4TEQ Software Solution  | 2024</p>
          <ul className="list-disc pl-5 mt-2 text-gray-300">
            <li>Created dynamic forms using HTML, CSS, and JavaScript </li>
            <li>Learned Frontend web development best practices</li>
          </ul>
        </div>
      </div>
<div>

       <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Course - AI(ML)</h3>
          <p className="text-gray-400">INFINITI Design  | 2024</p>
          <ul className="list-disc pl-5 mt-2 text-gray-300">
            <li>I Learned For Basics Concepts of AI(ml) </li>
            <li>I Worked on Real World Projects</li>
          </ul>
        </div>
      </div>

      {/* Scroll to Projects Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleScrollToProjects}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
        >
          Projects
        </button>
      </div>

      {/* Projects Section */}
      <div ref={projectRef} className="mt-12 pt-8 border-t border-gray-700">
        <h3 className="text-2xl font-bold mb-4 text-pink-400">Projects</h3>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
          <h4 className="text-lg font-semibold text text-white">Portfolio Website</h4>
          <p className="text-green-300">Built with React, Tailwind CSS, Framer Motion</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-white">Tour Guide and Booking Website</h4>
          <p className="text-green-300">Built with HTML, CSS, JavaScript, and PHP</p>
        </div>
      </div>
    </motion.div>
  );
}
