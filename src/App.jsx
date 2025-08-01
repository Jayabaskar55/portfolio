import { useRef } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import AnimatedBackground from "./components/AnimatedBackground";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

<ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  pauseOnHover
  draggable
  theme="dark"
  toastStyle={{
    background: "#1f1f1f",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "8px",
  }}
/>
export default function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    
    <div className="bg-black text-white scroll-smooth">

      <Home
        onAbout={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
        onContact={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
      />

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={experienceRef}>
        <Experience onContact={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })} />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
