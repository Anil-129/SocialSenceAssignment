// components/JobsComponent.jsx
import React from "react";
import JobSection from "../Component1/JobSection1";
import jobs from "../data1/job";

const JobsComponent = () => {
  
  const extraJobs = [
    { id: 4, title: "User Growth" },
    { id: 5, title: "Sales Forecast" },
  ];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Sales Dashboard</h2>
          <p className="text-sm text-gray-600">
            Track your sales and performance of your strategy
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="text-sm px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Filters & Sorts
          </button>
          <button className="text-sm px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Add Widget
          </button>
        </div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {jobs.map((section) => (
          <div key={section.id} className="border rounded-lg bg-gray-50 p-4 shadow-sm">
            <JobSection title={section.title} id={section.id} />
          </div>
        ))}
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {extraJobs.map((section) => (
          <div key={section.id} className="border rounded-lg bg-gray-50 p-4 shadow-sm">
            <JobSection title={section.title} id={section.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsComponent;
