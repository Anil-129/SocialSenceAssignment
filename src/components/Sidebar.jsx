import {
  FaHome,
  FaCalendarAlt,
  FaChartBar,
  FaTools,
  FaUserFriends,
  FaFileAlt,
  FaCogs,
  FaEnvelope,
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-full sm:w-64 bg-white shadow-md border-r rounded-xl mx-2 my-2 flex-shrink-0">
      <div className="flex flex-col h-full overflow-y-auto p-4">
        <div className="text-2xl font-bold text-gray-800 mb-6">Roofinity</div>

        <nav className="flex flex-col text-sm text-gray-600 space-y-6">
          
          <div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaHome /> Home
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md bg-gray-100 text-black font-medium cursor-pointer">
                <FaFileAlt /> Jobs
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaCalendarAlt /> Calendar
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaChartBar /> Performance
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-2 font-semibold text-gray-500 uppercase">Tools</div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaTools /> Instant Estimator
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaTools /> Measurement
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaFileAlt /> Proposals
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaTools /> Material Orders
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaTools /> Work Orders
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaFileAlt /> Invoices & Payments
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-2 font-semibold text-gray-500 uppercase">Manage</div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaUserFriends /> Customers
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaFileAlt /> File Manager
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaFileAlt /> Catalog
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaCogs /> Automations
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaEnvelope /> Email & Text
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
