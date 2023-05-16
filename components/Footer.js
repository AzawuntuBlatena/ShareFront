import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 md:py-12  bottom-0 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
        <div className="text-center md:text-left">
          <Link href="/" legacyBehavior>
            <a className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
              <Image src="/logo.png" width={30} height={30} alt="logo" />
              <h1 className="ml-2 font-bold text-lg text-white">Shareholder Management System</h1>
            </a>
          </Link>
        </div>
        <div className="text-center md:text-right">
          <ul className="flex justify-center md:justify-end mb-4 md:mb-0">
            <li className="ml-6">
              <Link href="/" legacyBehavior>
                <a className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
                  Home
                </a>
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/#aboutus" legacyBehavior>
                <a className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
                  About
                </a>
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/#contact" legacyBehavior>
                <a className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
                  Contact
                </a>
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/login" legacyBehavior>
                <a className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
                  Login
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-lg font-bold mb-2">About us</h2>
            <p className="text-sm">
              Shareholder Management System is a leading provider of shareholder management solutions for public and private companies. Our platform helps companies manage their shareholder communications, voting, and engagement processes with ease and efficiency.
            </p>
          </div>
          <div className="md:w-1/3 text-center">
            <h2 className="text-lg font-bold mb-2">Contact us</h2>
            <p className="text-sm">
              Shareholder Management System<br />
              123 Main Street<br />
              Anytown, USA 12345<br />
              <a href="mailto:info@shareholdermanagement.com" className="text-white hover:text-gray-200 transition duration-300 ease-in-out">info@shareholdermanagement.com</a>
            </p>
          </div>
          <div className="md:w-1/3 text-center md:text-right">
            <h2 className="text-lg font-bold mb-2">Connect with us</h2>
            <p className="text-sm">
              Follow us on social media for updates and news:
            </p>
            <div className="flex justify-center md:justify-end mt-2">
              <a href="#" className="text-white hover:text-gray-200 mr-4">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-200 mr-4">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-200 mr-4">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">
            &copy; 2023 Shareholder Management System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;