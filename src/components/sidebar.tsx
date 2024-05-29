import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-blue-700 to-blue-200 text-white shadow-lg">
      <div className="h-16 flex items-center justify-center bg-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m0-4h.01M21 12.9a9 9 0 11-9-9v0a9 9 0 019 9v0z" />
        </svg>
        <h1 className="text-xl font-bold text-white tracking-wide">Contact App</h1>
      </div>

      <nav className="px-4 pt-6 pb-8">
        <ul className="space-y-4">
          <li>
            <Link to="/ContactManagementApp" className="flex items-center text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18"></path>
              </svg>
              <span className="font-medium">Contacts</span>
            </Link>
          </li>
          <li>
            <Link to="/charts-and-maps" className="flex items-center text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2h6v2m-6 4v-4h6v4M12 3a7 7 0 110 14 7 7 0 010-14z"></path>
              </svg>
              <span className="font-medium">Charts and Maps</span>
            </Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;