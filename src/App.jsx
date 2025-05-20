import React from "react";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import JobsComponent from "./components/JobsComponent";
// import jobs from "./data/job";
import Sidebar from "./Component1/Sidebar1";
import Header from "./Component1/Header1";
import JobsComponent from "./Component1/JobsComponent1";
import jobs from "./data1/job";

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
    
      <div className="w-full md:w-64">
        <Sidebar />
      </div>

      <main className="flex-1 overflow-auto p-4 sm:p-6">
        <Header />
        <JobsComponent jobData={jobs} />
      </main>
    </div>
  );
}

export default App;
