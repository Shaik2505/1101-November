import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ onLinkClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef([]);
  const timeoutRef = useRef(null);

  // Define the reused CSS classes as a constant
  const baseClasses =
    "text-text block md:inline-block hover:text-text/50 transition duration-300 py-2 px-2 dark:text-darkText dark:hover:text-darkOnHover";
  const dropdownClasses =
    "absolute left-0 md:w-48 mt-2 bg-white text-text shadow-lg rounded-md z-10";
  const linkClasses =
    "block px-4 py-2 text-sm hover:bg-primary/70 transition duration-100";

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 1000);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !dropdownRefs.current.some((ref) => ref && ref.contains(event.target))
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
      {/* Home Dropdown */}
      <div
        className="relative"
        ref={(el) => (dropdownRefs.current[0] = el)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          to="/body/home"
          onClick={() => handleDropdownToggle(0)}
          className={baseClasses}
        >
          Home
        </Link>
        {activeDropdown === 0 && (
          <div className={dropdownClasses}>
            <Link
              to="/body/home-dashboard"
              onClick={onLinkClick}
              className={linkClasses}
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>

      {/* Stories Dropdown */}
      <div
        className="relative"
        ref={(el) => (dropdownRefs.current[1] = el)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          to="/body/stories"
          onClick={() => handleDropdownToggle(1)}
          className={baseClasses}
        >
          Stories
        </Link>
        {activeDropdown === 1 && (
          <div className={dropdownClasses}>
            <Link
              to="/body/stories-create"
              onClick={onLinkClick}
              className={linkClasses}
            >
              Create Story
            </Link>
            <Link
              to="/body/stories-stories"
              onClick={onLinkClick}
              className={linkClasses}
            >
              My Stories
            </Link>
            <Link
              to="/body/stories-collaborations"
              onClick={onLinkClick}
              className={linkClasses}
            >
              Collaborations
            </Link>
          </div>
        )}
      </div>

      {/* Media Dropdown */}
      <div
        className="relative"
        ref={(el) => (dropdownRefs.current[2] = el)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          to="/body/media"
          onClick={() => handleDropdownToggle(2)}
          className={baseClasses}
        >
         Chat & Media
        </Link>
       
      </div>

      {/* Analytics Dropdown */}
      <div
        className="relative"
        ref={(el) => (dropdownRefs.current[3] = el)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          to="/body/analytics"
          onClick={() => handleDropdownToggle(3)}
          className={baseClasses}
        >
          Analytics
        </Link>
      </div>

      {/* Profile Dropdown */}
      <div
        className="relative"
        ref={(el) => (dropdownRefs.current[4] = el)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          to="/body/profile"
          onClick={() => handleDropdownToggle(4)}
          className={baseClasses}
        >
          Profile
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
