import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";


export default function About() {
  return (
    <motion.div
      className="p-6 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 text-pink-500">About Me</h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        I'm a passionate junior full stack developer with experience in React, Node.js, Express, and MongoDB. I love building scalable, responsive, and user-friendly web apps.
      </p>
    </motion.div>
  );
}
