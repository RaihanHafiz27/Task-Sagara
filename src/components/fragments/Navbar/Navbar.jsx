import { useState } from "react";
import { Text } from "../../elements/Text/Text";
import { NavLink } from "../../elements/Link/NavLink";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center justify-between w-full border-2 border-pink-700 md:w-auto">
          {/* Logo dan Text */}
          <Logo />
          {/*  Hamburger Menu Button (Mobile) */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          {/* Link Section (Hidden on Mobile) */}
          <NavLink />
        </div>

        {/* Sign In Button */}
        <button className="hidden px-6 py-2 text-white rounded-md md:block bg-customRed">
          SIGN IN
        </button>
      </div>

      {/* Mobile Menu (Visible on Mobile) */}
      {isMenuOpen && (
        <div className="mt-2 md:hidden">
          <ul className="space-y-4 text-center">
            <li>
              <a
                href="#it-certification"
                className="block py-2 text-gray-700 hover:text-blue-500"
              >
                IT CERTIFICATION
              </a>
            </li>
            <li>
              <a
                href="#careers"
                className="block py-2 text-gray-700 hover:text-green-500"
              >
                CAREERS
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block py-2 text-gray-700 hover:text-red-500"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#apply"
                className="block py-2 text-gray-700 hover:text-blue-500"
              >
                Apply Now
              </a>
            </li>
            <li>
              <button className="px-6 py-2 text-white rounded-md bg-customRed">
                SIGN IN
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
      <div className="flex flex-col items-start text-lg font-bold">
        <Text className="text-lg">SAGARA</Text>
        <div className="relative flex items-center -mt-3 space-x-2">
          <Text>TECH</Text>
          <div className="absolute w-1 h-1 transform -translate-x-1 translate-y-1 bg-red-700 rounded-sm left-full"></div>
        </div>
      </div>
    </div>
  );
};
