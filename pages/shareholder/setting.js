import React from 'react'
import Layout from '../shareholder'
import Head from 'next/head';
import { useState } from 'react';

export default function Settings() {
  // Define state variables for the user's name, email, password, and night mode setting
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('');
  const [nightModeEnabled, setNightModeEnabled] = useState(false);

  // Handle form submission for name and email changes
  const handleNameEmailSubmit = (event) => {
    event.preventDefault();
    // Use an API call or database update to save the user's updated name and email
    alert(`Name: ${name}\nEmail: ${email}\nChanges saved successfully!`);
  };

  // Handle form submission for password change
  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    // Use an API call or database update to save the user's updated password
    alert(`New Password: ${password}\nPassword changed successfully!`);
  };

  // Handle toggle for night mode setting
  const handleNightModeToggle = () => {
    setNightModeEnabled(!nightModeEnabled);
  };

  return (
    
    <div className={`bg-${nightModeEnabled ? 'gray-900' : 'gray-100'} min-h-screen text-${nightModeEnabled ? 'white' : 'black'}`}>
      <Head>
        <title>User Settings - Shareholder Management System</title>
      </Head>
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-medium text-gray-800 mb-8">User Settings</h1>
        <div className={`bg-${nightModeEnabled ? 'gray-800' : 'white'} border border-gray-200 rounded-lg p-4 shadow`}>
          <form onSubmit={handleNameEmailSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`border border-gray-300 rounded-lg px-4 py-2 w-full ${nightModeEnabled ? 'bg-gray-700 text-white' : ''}`}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`border border-gray-300 rounded-lg px-4 py-2 w-full ${nightModeEnabled ? 'bg-gray-700 text-white' : ''}`}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg px-4 py-2 ${nightModeEnabled ? 'bg-gray-700' : ''}`}
            >
              Save Name and Email Changes
            </button>
          </form>
          <div className="my-8 border-b border-gray-200"></div>
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`border border-gray-300 rounded-lg px-4 py-2 w-full ${nightModeEnabled ? 'bg-gray-700 text-white' : ''}`}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg px-4 py-2 ${nightModeEnabled ? 'bg-gray-700' : ''}`}
            >
              Change Password
            </button>
          </form>
          <div className="my-8 border-b border-gray-200"></div>
          <div className="flex items-center">
            <label htmlFor="night-mode-toggle" className="mr-4 font-medium">
              Night Mode
            </label>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                type="checkbox"
                id="night-mode-toggle"
                name="night-mode-toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                checked={nightModeEnabled}
                onChange={handleNightModeToggle}
              />
              <label
                htmlFor="night-mode-toggle"
                className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${nightModeEnabled ? 'bg-blue-500' : ''}`}
              ></label>
            </div>
            <span className="text-gray-700">{nightModeEnabled ? 'Enabled' : 'Disabled'}</span>
          </div>
        </div>
      </div>
    </div>
  
  );
}
// ```

// In this updated example, we've added the ability for the user to change their password and enable night mode.

// We use responsive design techniques to ensure that the page is optimized for different screen sizes and devices, and we use Tailwind CSS classes to style the page.

// The `Settings` component now includes three forms:

// 1. A form for updating the user's name and email.
// 2. A form for changing the user's password.
// 3. A toggle for enabling and disabling night mode.

// We handle form submissions and toggle changes using various event handlers and state variables.

// I hope this updated example helps! Let me know if you have any further questions or if there's anything else I can help you with.