import React from "react";
import { FiSearch, FiSettings, FiBell } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-sm border">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md border border-gray-200 w-full md:w-64">
          <FiSearch className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="bg-transparent focus:outline-none text-sm w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
          <FiSettings className="w-5 h-5" />
        </button>

        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
          <FiBell className="w-5 h-5" />
        </button>

        <button className="flex items-center gap-1 px-3 py-1.5 bg-orange-500 text-white text-sm font-medium rounded">
          <HiOutlineDownload className="w-5 h-5" />
          Export
        </button>

        <FaUserCircle className="w-8 h-8 text-gray-500" />
      </div>
    </div>
  );
};

export default Header;
