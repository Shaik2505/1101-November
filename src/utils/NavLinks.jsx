import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ onLinkClick }) => {
  const baseClasses =
    "text-text block md:inline-block hover:text-text/50 transition duration-300 py-2 px-2 dark:text-darkText dark:hover:text-darkOnHover";

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
      <Link to="/body/home" onClick={onLinkClick} className={baseClasses}>
        Home
      </Link>
      <Link
        to="/body/home-dashboard"
        onClick={onLinkClick}
        className={baseClasses}
      >
        Dashboard
      </Link>
      <Link to="/body/stories" onClick={onLinkClick} className={baseClasses}>
        Stories
      </Link>
      <Link to="/body/media" onClick={onLinkClick} className={baseClasses}>
        Chat & Media
      </Link>
      <Link to="/body/analytics" onClick={onLinkClick} className={baseClasses}>
        Analytics
      </Link>
      <Link to="/body/profile" onClick={onLinkClick} className={baseClasses}>
        Profile
      </Link>
      <button to="/" onClick={onLinkClick} className='bg-black text-white p-2 rounded-lg'>
        Logout
      </button>
    </div>
  );
};

export default NavLinks;
