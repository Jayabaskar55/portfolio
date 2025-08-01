import { motion } from "framer-motion";
import { toast } from "react-toastify";
import profileImg from "../assets/profile.jpg";
import AnimatedBackground from "../components/AnimatedBackground";


export default function Home({ onAbout, onContact }) {
    return (
      
            <div className="relative min-h-screen bg-black overflow-hidden text-white">

                <motion.div
                    className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.img
                        src={profileImg}
                        alt="Profile"
                        className="w-40 h-40 rounded-full object-cover border-4 border-pink-600 shadow-lg mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                    />

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Welcome to <span className="text-pink-500">My Portfolio</span>
                    </h1>

                    <p className="text-lg text-gray-300 max-w-xl mb-6">
                        I'm a junior full stack developer building interactive web apps using React, Tailwind CSS & Node.js.
                    </p>

                    <div className="flex gap-4">
                        <button
                            onClick={() => {
                                toast.info("Scrolling to About...");
                                onAbout();
                            }}
                            className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-lg"
                        >
                            About
                        </button>

                    </div>
                </motion.div>

            </div>
       

    );
}
