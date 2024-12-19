import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { getUserSession, clearUserSession, apiRequest, HTTP_METHODS } from '../../../utils/utils';

function AdminNavbar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [userName, setUserName] = useState('Admin');

  const cld = new Cloudinary({ cloud: { cloudName: 'di5xtc8ty' } });
      
  const img = cld
          .image('kbnbyejqana3nfe2wfyv')
          .format('auto') 
          .quality('auto')

  useEffect(() => {
    const user = getUserSession();
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await apiRequest(HTTP_METHODS.POST, '/api/auth/signout');
    } catch (error) {
      console.error("Signout failed:", error);
    } finally {
      clearUserSession();
      window.location.href = '/login';
    }
  };

  return (
    <div className="flex justify-between items-center bg-black px-4 py-3 shadow-md text-white">
      {/* Logo */}
      <div>
        <AdvancedImage cldImg={img} className="h-10 mr-3"/>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            className="flex items-center space-x-2 bg-white text-black py-2 px-4 rounded-lg shadow-md focus:outline-none"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <span className="font-medium">{userName}</span>
            <FaUserCircle className="text-gray-600 text-2xl" />
          </button>

          {/* Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50">
              <ul>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-left text-black hover:bg-gray-100"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
