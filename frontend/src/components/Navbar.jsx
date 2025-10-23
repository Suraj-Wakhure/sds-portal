import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? "text-cyan-400 font-semibold"
      : "text-gray-300 hover:text-cyan-400 transition-all";

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-[#0a192f] px-6 py-4 flex justify-between items-center shadow-md w-auto h-20">
        <h1 className="ml-6 sm:ml-8 md:!ml-12 text-3xl sm:text-4xl md:!text-5xl font-bold text-cyan-400">
          SDS Portal
        </h1>
        
        <ul className="hidden md:flex space-x-6 !justify-center items-center [&>*]:!m-10">
          <li><Link to="/" className={linkClass("/")}>Home</Link></li>
          <li><Link to="/about" className={linkClass("/about")}>About</Link></li>
          <li><Link to="/teams" className={linkClass("/teams")}>Team</Link></li>
          <li><Link to="/projects" className={linkClass("/projects")}>Projects</Link></li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#0a192f] shadow-lg border-t border-gray-700">
          <ul className="flex flex-col">
            <li className="text-center">
              <Link
                to="/"
                className={`block py-4 px-6 border-b border-gray-800 ${linkClass("/")}`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="/about"
                className={`block py-4 px-6 border-b border-gray-800 ${linkClass("/about")}`}
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="/teams"
                className={`block py-4 px-6 border-b border-gray-800 ${linkClass("/teams")}`}
                onClick={handleLinkClick}
              >
                Team
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="/projects"
                className={`block py-4 px-6 ${linkClass("/projects")}`}
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}