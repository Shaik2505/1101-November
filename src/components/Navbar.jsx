import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";
import NavLinks from "../utils/NavLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown
  const navRef = useRef(null);
  const dropdownRefs = useRef([]); // To store refs of each dropdown

  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) && // Check if clicked outside the navbar
      !dropdownRefs.current.some((ref) => ref && ref.contains(event.target)) // Also check if clicked outside any dropdown
    ) {
      setIsOpen(false);
      setActiveDropdown(null); // Close active dropdown when clicking outside
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

  const handleDropdownToggle = (index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index)); // Toggle active dropdown
  };

  return (
    <nav
      className="w-full sticky top-0 bg-primary shadow-md hover:primary/50 transition duration-300 dark:bg-darkPrimary "
      ref={navRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/body/home"
              className="text-text hover:text-text/50 text-2xl font-bold dark:text-darkText dark:hover:text-darkOnHover"
            >
              MyApp
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks
              onLinkClick={() => setIsOpen(false)} // Close menu when link clicked
              handleDropdownToggle={handleDropdownToggle}
              activeDropdown={activeDropdown}
              dropdownRefs={dropdownRefs}
            />
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
        <div className="fixed inset-y-0 right-0 w-64 bg-primary shadow-lg transform translate-x-0 transition-transform duration-300 md:hidden z-50">
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
            <NavLinks
              onLinkClick={() => setIsOpen(false)}
              handleDropdownToggle={handleDropdownToggle}
              activeDropdown={activeDropdown}
              dropdownRefs={dropdownRefs}
            />
          </div>
        </div>
      )}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
