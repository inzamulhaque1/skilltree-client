/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold bg-purple-500 py-2 px-2 rounded-l-full rounded-r-xl"
              : "text-purple-500 font-bold py-2 px-3 hover:text-green-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/find-tutors"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold bg-purple-500 py-2 px-3 rounded-xl"
              : "text-purple-500 font-bold py-2 px-3 hover:text-green-500"
          }
        >
          Find Tutors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-tutorials"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold bg-purple-500 py-2 px-3 rounded-r-full rounded-l-xl"
              : "text-purple-500 font-bold py-2 px-3 hover:text-green-500"
          }
        >
          Add Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/book"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold bg-purple-500 py-2 px-3 rounded-r-full rounded-l-xl"
              : "text-purple-500 font-bold py-2 px-3 hover:text-green-500"
          }
        >
          My Bookings
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white dark:bg-[#0B0716]">
      <div className="navbar w-11/12 md:w-9/12 mx-auto mt-3 flex items-center">
        {/* Left Section */}
        <div className="navbar-start flex items-center">
          <Link to="/" className="text-purple-500 font-josefin text-xl">
            Skill<span className="text-green-500 font-bold text-2xl">Tree</span>
          </Link>
        </div>

        {/* Center Section */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal border border-purple-600 px-1 py-2 rounded-full gap-3">
            {links}
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end gap-4 flex items-center">
          {/* Theme Button */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            {/* Sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* Moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* Avatar (Hidden on Mobile) */}
          <div className="avatar hidden md:block">
            <div className="w-12 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <Link
            to="/"
            className="btn bg-green-500 text-white px-4 py-2 font-bold"
          >
            Sign Up
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="menu-vertical border border-purple-600 px-4 py-2 rounded-md">
            {links}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
