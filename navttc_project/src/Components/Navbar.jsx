import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand Name */}
        <div className="text-2xl font-bold text-gray-800">
          ImranElectronics
        </div>

        {/* Menu Items */}
        <div className="flex space-x-6">
          <Link href="#" className="text-gray-600 hover:text-gray-800 relative">
            Home
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-500 transition-transform duration-300 transform scale-x-0 hover:scale-x-100" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800 relative">
            Products
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-500 transition-transform duration-300 transform scale-x-0 hover:scale-x-100" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800 relative">
            About
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-500 transition-transform duration-300 transform scale-x-0 hover:scale-x-100" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800 relative">
            Contact
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-500 transition-transform duration-300 transform scale-x-0 hover:scale-x-100" />
          </Link>
        </div>

        {/* Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 rounded-full p-2 flex items-center justify-center">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <a href="#" className="text-gray-600 rounded-full p-2 flex items-center justify-center">
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
          <Link to="/about" className="bg-red-500 rounded-full p-4 flex items-center justify-center w-10 h-10">
            <FontAwesomeIcon icon={faUserRegular} className="text-white" />
          </Link>
        </div>
      </div>
      <div className="border-b border-gray-300" />
    </nav>
  );
};

export default Navbar;
