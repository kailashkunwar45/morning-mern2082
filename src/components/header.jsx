
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex shadow-lg px-5 py-4 justify-between tracking-[10px]">
      <nav className="space-x-2">
        <NavLink
          to="/"
          className="hover:bg-gray-300 px-5 py-2"
        >
          Gourmet au Catering
        </NavLink>
      </nav>

      <nav className="space-x-2">
        <NavLink
          to="/about"
          className="hover:bg-gray-300 px-5 py-2"
        >
          About
        </NavLink>
        <NavLink
          to="/menu"
          className="hover:bg-gray-300 px-5 py-2"
        >
          Menu
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:bg-gray-300 px-5 py-2"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}



