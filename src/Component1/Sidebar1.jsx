import {
  FaHome,
  FaBoxOpen,
  FaShoppingCart,
  FaUserFriends,
  FaComments,
  FaEnvelope,
  FaChartLine,
  FaPlug,
  FaChartBar,
  FaUserCircle,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-full sm:w-64 bg-white shadow-md border-r rounded-xl mx-2 my-2 flex-shrink-0 flex flex-col">
      <div className="flex flex-col h-full overflow-y-auto p-4">
     
        <div className="mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold shadow hover:bg-blue-700 w-full">
            Veselyt Inc.
          </button>
        </div>

        <nav className="flex flex-col text-sm text-gray-600 space-y-6 flex-grow">
        
          <div>
            <div className="mb-2 font-semibold text-gray-500 uppercase">Main Menu</div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaHome /> Dashboard
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaBoxOpen /> Products
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaShoppingCart /> Orders
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaUserFriends /> Customers
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaComments /> Chat
              </li>
            </ul>
          </div>

         
          <div>
            <div className="mb-2 font-semibold text-gray-500 uppercase">Other</div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaEnvelope /> Email
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaChartLine /> Analytics
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaPlug /> Integration
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-2 font-semibold text-gray-500 uppercase">Performance</div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaChartBar /> Performance
              </li>
            </ul>
          </div>

         
          <div>
            <div className="mb-2 font-semibold text-gray-500 uppercase">Account</div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaUserCircle /> Account
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaUsers /> Members
              </li>
            </ul>
          </div>
        </nav>

      
        <div className="mt-auto pt-6 border-t flex justify-between items-center px-2">
          <button className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer text-gray-700">
            <FaUserCircle /> Profile
          </button>
          <button className="flex items-center gap-2 p-2 rounded-md hover:bg-red-100 cursor-pointer text-red-600 font-medium">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
