import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";
import NavLinks from "../utils/NavLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className="z-50 w-full fixed bg-primary shadow-md transition duration-300 dark:bg-gray-700"
      ref={navRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/body/home"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-text hover:text-text/50 text-2xl font-bold dark:text-darkText dark:hover:text-darkOnHover"
            >
              MyApp
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks onLinkClick={() => setIsOpen(false)} />
            <ThemeBtn />
          </div>
          <div className="flex md:hidden items-center space-x-4">
            <ThemeBtn />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-primary/50 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-0 right-0 w-2/4 bg-primary transition-all animate-slideIn duration-100 dark:bg-darkPrimary shadow-lg md:hidden z-50 overflow-y-auto rounded-lg">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-primary/50 p-2 rounded-md focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 space-y-4">
            <NavLinks onLinkClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
