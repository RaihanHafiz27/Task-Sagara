import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiGraduateCap } from "react-icons/gi";
import { BiGridAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa"; // Import icon hamburger
import { Logo } from "../components/elements/Logo/Logo";

const NavbarDashboard = (props) => {
  const { type } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed hidden w-64 h-screen text-white bg-gray-800 md:block">
        {" "}
        <div className="p-6">
          <Logo />
        </div>
        <ul className="mt-10">
          <p className="px-2 mx-4 font-bold text-gray-500">Menu</p>
          <li
            className={`py-2 px-4 ${
              type === "Dashboard" ? "bg-red-600" : "hover:bg-gray-700"
            } mx-4 rounded-lg cursor-pointer mt-2`}
          >
            <Link to="/dashboard" className="flex items-center">
              <div className="flex items-center gap-3">
                <p>
                  <BiGridAlt />
                </p>
                <p>Dashboard</p>
              </div>
            </Link>
          </li>
          <li
            className={`py-2 px-4 ${
              type === "Student" ? "bg-red-600" : "hover:bg-gray-700"
            } mx-4 rounded-lg cursor-pointer mt-3`}
          >
            <Link to="/student" className="flex items-center">
              <div className="flex items-center gap-3">
                <p>
                  <GiGraduateCap />
                </p>
                <p>Students</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon for mobile */}
      <div className="fixed top-0 flex items-center justify-between w-full p-2 text-white bg-gray-800 md:hidden">
        <Logo />
        <button onClick={toggleSidebar} className="text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="p-6">
          <Logo />
        </div>
        <ul className="mt-10">
          <p className="px-2 mx-4 font-bold text-gray-500">Menu</p>
          <li
            className={`py-2 px-4 ${
              type === "Dashboard" ? "bg-red-600" : "hover:bg-gray-700"
            } mx-4 rounded-lg cursor-pointer mt-2`}
          >
            <Link
              to="/dashboard"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-3">
                <p>
                  <BiGridAlt />
                </p>
                <p>Dashboard</p>
              </div>
            </Link>
          </li>
          <li
            className={`py-2 px-4 ${
              type === "Student" ? "bg-red-600" : "hover:bg-gray-700"
            } mx-4 rounded-lg cursor-pointer mt-3`}
          >
            <Link
              to="/student"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-3">
                <p>
                  <GiGraduateCap />
                </p>
                <p>Students</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarDashboard;
