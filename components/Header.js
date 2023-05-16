import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes, FaHome, FaSignInAlt, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import NavLogo from '../public/assets/logo/sm.jpg'

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-300 to-purple-500 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link href="/" legacyBehavior>
        <a>
            <Image
              src={NavLogo}
              alt='/'
              width='100'
              height='15'
              className='cursor-pointer'
            />
            <h1 className="ml-2 font-bold text-lg text-white">Shareholder Management System</h1>
          </a>
            
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex">
            <li className="ml-6 text-white hover:text-gray-200 flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FaHome size={20} className="mr-2" />
              <Link href="/" legacyBehavior>
                  
                  Home
  
              </Link>
            </li>
            <li className="ml-6 text-white hover:text-gray-200 flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FaInfoCircle size={20} className="mr-2" />
                  
              <Link href="/#Aboutus" >
              About
                  
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/#Contact" legacyBehavior>
                <a className="text-white hover:text-gray-200 flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <FaEnvelope size={20} className="mr-2" />
                  Contact
                </a>
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/login" legacyBehavior>
                <a className="text-white hover:text-gray-200 flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <FaSignInAlt size={20} className="mr-2" />
                  Login
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center sm:hidden">
          <button onClick={toggleMenu}>
            {showMenu ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
          </button>
        </div>
      </div>
      {showMenu && (
        <nav className="sm:hidden bg-white py-2 shadow-lg rounded-md">
          <ul className="flex flex-col">
            <li className="py-2 border-b border-gray-200">
              <Link href="/" legacyBehavior>
                <a className="text-gray-500 hover:text-gray-900 flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <FaHome size={20} className="mr-2" />
                  Home
                </a>
              </Link>
            </li>
            <li className="py-2 border-b border-gray-200">
              <Link href="/#about" legacyBehavior>
                <a className="text-gray-500 hover:text-gray-900 flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <FaInfoCircle size={20} className="mr-2" />
                  About
                </a>
              </Link>
            </li>
            <li className="py-2 border-b border-gray-200">
              <Link href="/#contact" legacyBehavior>
                <a className="text-gray-500 hover:text-gray-900 flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <FaEnvelope size={20} className="mr-2" />
                  Contact
                </a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/login" legacyBehavior>
                <a className="text-gray-500 hover:text-gray-900 flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <FaSignInAlt size={20} className="mr-2" />
                  Login
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;