import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 flex justify-around">
      <Link to="/" className="hover:text-pink-500">Home</Link>
      <Link to="/about" className="hover:text-pink-500">About</Link>
      <Link to="/experience" className="hover:text-pink-500">Experience</Link>
      <Link to="/contact" className="hover:text-pink-500">Contact</Link>
    </nav>
  );
}
