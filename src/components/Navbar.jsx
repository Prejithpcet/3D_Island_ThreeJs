//import React from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white flex justify-center items-center font-bold shadow-md"
      >
        <p className="blue-gradient_text">3D</p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        <a
          href="https://www.quickfolio.me/prejithp-contact"
          target="_blank"
          /*className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }*/
        >
          About
        </a>
        <a
          href="https://prejith-portfolio.netlify.app/"
          target="_blank"
          /*className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }*/
        >
          Projects
        </a>
      </nav>
    </header>
  );
}
