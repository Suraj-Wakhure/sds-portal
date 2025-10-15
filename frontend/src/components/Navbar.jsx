import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? "text-cyan-400 font-semibold"
      : "text-gray-300 hover:text-cyan-400 transition-all";

  return (
    <nav className="bg-[#0a192f] px-6 py-4 flex justify-between items-center shadow-md w-auto h-20  ">
      <h1 className="!ml-7 !text-5xl font-bold text-cyan-400">SDS Portal</h1>
      <ul className="flex space-x-6 !justify-center items-center [&>*]:!m-10">
        <li><Link to="/" className={linkClass("/")}>Home</Link></li>
        <li><Link to="/about" className={linkClass("/about")}>About</Link></li>
      </ul>
    </nav>
  );
}
