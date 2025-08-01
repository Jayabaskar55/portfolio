// src/pages/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const { name, email, number, subject, message } = formData;

    if (!name || !email || !number || !subject || !message) {
      toast.error("Please fill in all fields");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return false;
    }

    if (!/^\d{10}$/.test(number)) {
      toast.error("Enter a valid 10-digit phone number");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    toast.success("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });
  };

  return (
    <motion.div
      className="p-6 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-pink-500">Contact</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          className="w-full p-2 rounded bg-gray-800 text-white h-32"
        />
        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded text-white"
        >
          Send
        </button>
      </form>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center gap-6 text-2xl text-gray-400">
        <a
          href="https://www.instagram.com/__bask.a.r__?igsh=MW04dHg0ZmtmazhzaQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com/in/yourusernamehttps://www.linkedin.com/in/jayabaskar-j-b796242bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Jayabaskar5555"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-sm text-gray-500 border-t border-gray-700 pt-6">
        <p>📍 Address: 159A, Thirupur, Kulathur(tk), Pudukkottai(dt)  Pin-622502.</p>
        <p>📞 Phone: +91 7904482855</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Jaya Baskar. All rights reserved.</p>
      </div>
    </motion.div>
  );
}
