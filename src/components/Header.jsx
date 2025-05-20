// components/Header/Header.jsx
import React from "react";
import { FiSearch, FiSettings, FiBell } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-sm border">
      {/* Left section: Title and Date */}
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-gray-800">Jobs Dashboard</h2>
        <p className="text-sm text-gray-500">Sunday, Mar 04, 2025</p>
      </div>

      {/* Right section: Search and Icons */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        {/* Search bar */}
        <div className="hidden sm:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md border border-gray-200 w-full sm:w-64">
          <FiSearch className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="bg-transparent focus:outline-none text-sm w-full"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 ml-auto">
          <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
            <FiSettings className="w-5 h-5" />
          </button>
         
          <div className="flex items-center gap-2">
            <FaUserCircle className="w-8 h-8 text-gray-400" />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;