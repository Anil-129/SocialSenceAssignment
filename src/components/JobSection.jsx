import React from "react";

// Icons for different status tags
const StatusIcons = {
  "Report Complete": (
    <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  "Draft proposal": (
    <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  "Report incomplete": (
    <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "Report canceled": (
    <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
};

const JobSection = ({ title, count, amount, jobs }) => {
  return (
    <section className="mb-8">
      {/* Section header with title and amount */}
      <header className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <span className="text-sm bg-gray-100 rounded-full px-2 py-0.5">
            {count}
          </span>
        </div>
        {amount && (
          <span className="text-sm font-medium text-blue-600">
            ${amount.toFixed(2)}
          </span>
        )}
      </header>

      {/* List of job cards */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <article key={job.id} className="p-4 bg-white rounded-lg border shadow-sm">
            
            {/* Status tags row */}
            {job.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {job.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`text-xs px-2 py-1 rounded flex items-center ${tag.color}`}
                  >
                    {StatusIcons[tag.label]}
                    {tag.label}
                  </span>
                ))}
              </div>
            )}

            {/* Task progress (if exists) */}
            {job.tasks && (
              <div className="flex justify-between items-center mb-3 text-xs text-gray-500">
                <span>Tasks {job.tasks.completed}/{job.tasks.total}</span>
                {job.status && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    {job.status}
                  </span>
                )}
              </div>
            )}

            {/* Client information */}
            <div className="mb-3">
              <div className="text-xs text-gray-500">{job.location}</div>
              <div className="flex items-center gap-2 mt-1">
                {/* Client avatar with initials */}
                <div className="h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center text-xs text-white">
                  {job.client.split(' ').map(name => name[0]).join('')}
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {job.client}
                </div>
              </div>
            </div>

            {/* Job card footer */}
            <footer className="flex justify-between items-center text-xs text-gray-500">
              <div className="flex items-center gap-2">
                {/* Priority badge */}
                {job.priority && (
                  <span className={`px-2 py-0.5 rounded ${
                    job.priority === 'High' ? 'bg-red-100 text-red-800' :
                    job.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {job.priority}
                  </span>
                )}
                {/* Days since update */}
                <span>
                  {job.updated === "now" ? "Just now" : `${job.updated} days`}
                </span>
              </div>
              
              <div className="flex items-center">
                {/* Last updated text */}
                <span>
                  Updated {job.updated === "now" ? "just now" : `${job.updatedDaysAgo} days ago`}
                </span>
                {/* PA badge */}
                <span className="ml-2 bg-gray-100 rounded-full px-2 py-0.5">
                  PA
                </span>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default JobSection;