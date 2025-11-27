import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const menuLinks = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-blue-600">MySite</h1>

        {/* MENU LINKS (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-gray-700">
          {menuLinks.map((item) => (
            <li
              key={item}
              className="hover:text-blue-600 transition cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* HAMBURGER BUTTON (Mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* DROPDOWN MENU (Mobile) */}
      {open && (
        <div className="md:hidden bg-gray-100 px-6 py-4 shadow-inner">
          <ul className="space-y-4 text-gray-700">
            {menuLinks.map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
