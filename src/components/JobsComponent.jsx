// components/JobsComponent/JobsComponent.jsx
import React from "react";
import JobSection from "../components/JobSection";

const JobsComponent = ({ jobData }) => {
  return (
    <div className="flex flex-col mt-2">
      {/* Header with view options on left and action buttons on right */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        {/* Left-aligned view options */}
        <div className="flex items-center gap-4">
          
          <div className="flex bg-gray-100 rounded-lg p-1 border border-gray-200 shadow-inner">
            {/* Kanban Button */}
            <button className="px-3 py-1.5 text-sm rounded-md bg-white shadow-sm border border-gray-300 flex items-center justify-center min-w-[80px]">
              
              Kanban View
            </button>
            
            {/* List Button */}
            <button className="px-3 py-1.5 text-sm rounded-md hover:bg-gray-50 flex items-center justify-center min-w-[80px]">
              
              List View
            </button>
            
            {/* Settings Button */}
            <button className="px-3 py-1.5 text-sm rounded-md hover:bg-gray-50 flex items-center justify-center min-w-[80px]">
              Settings
            </button>
          </div>
        </div>
        
        {/* Right-aligned action buttons */}
        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <button className="text-sm px-4 py-2 bg-white border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-50">
              All works
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <div className="relative">
            <button className="text-sm px-4 py-2 bg-white border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters & sorts
            </button>
          </div>
          
          <button className="text-sm px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2 hover:bg-blue-700 border border-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add new
          </button>
        </div>
      </div>

      {/* Job Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobData.map((section) => (
          <div 
            key={section.id} 
            className="border rounded-lg bg-gray-50 p-4 shadow-sm"
          >
            <JobSection
              title={section.title}
              count={section.count}
              jobs={section.jobs}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsComponent;