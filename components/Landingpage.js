import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Shareholder Management System | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-md">
        <nav className="container mx-auto py-4 flex flex-wrap items-center justify-between">
          <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <Image src="./iii.jpg" width={40} height={40} alt="logo" />
              <h1 className="ml-2 font-bold text-lg">Shareholder Management System</h1>
            </a>
          </Link>
          <div className="flex items-center mt-4 sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="ml-4 text-gray-500 hover:text-gray-900">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="ml-4 text-gray-500 hover:text-gray-900">
              <FaInstagram size={20} />
            </a>
          </div>
        </nav>
      </header>

      <section className="flex-grow">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Welcome to the Shareholder Management System
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-500">
            Our system provides a comprehensive solution for managing your shareholders, including tracking ownership, managing dividends, and communicating with shareholders.
          </p>
          <div className="mt-8">
            <Link href="login" legacyBehavior>
              <a className="inline-block bg-indigo-600 py-3 px-6 rounded-lg font-medium text-white hover:bg-indigo-700">
                Login
              </a>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Link href="/" legacyBehavior>
              <a>
                <Image src="./iii.jpg" width={40} height={40} alt="logo" />
              </a>
            </Link>
            <p className="ml-2 text-base sm:text-lg md:text-xl text-gray-500">
              © 2023 Shareholder Management System. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="ml-4 text-gray-500 hover:text-gray-900">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="ml-4 text-gray-500 hover:text-gray-900">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;