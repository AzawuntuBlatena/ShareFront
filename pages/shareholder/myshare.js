import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../shareholder';
// import { getUserById } from '../utils/database';

// Define the UserProfile component
export default function UserProfile() {
  // Define state variables for the user data and the router
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { userId } = router.query;

  // Use the useEffect hook to retrieve the user data when the component mounts or the user ID changes
  // useEffect(() => {
  //   if (userId) {
  //     // Use the getUserById function to retrieve the user data
  //     getUserById(userId).then((userData) => setUser(userData));
  //   }
  // }, [userId]);

  // Display a loading message if the user data is not yet available
  // if (!user) {
  //   return <div>Loading...</div>;
  // }

  // Render the user profile using the retrieved user data
  return (
   
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>'s Profile</title>
      </Head>
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-medium text-gray-800 mb-8">'s Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Personal Information</h2>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Email:</span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Phone:</span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Address:</span> 
            </p>
            
            <h2 className="text-lg font-medium text-gray-800 mt-8 mb-4">Interests</h2>
            {/* <ul className="list-disc list-inside text-gray-600">
              {user.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}

            </ul> */}
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4 shadow">
          <h2 className="text-lg font-medium text-gray-800 mt-8 mb-4">Shareholder Information</h2>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Company:</span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Shares Owned:</span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Shareholder Type:</span> 
            </p>
          </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Profile Picture</h2>
            <img src="" alt="Profile" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
    
  );
}
// ```

// In this version of the code, we have added comments to explain each part of the `UserProfile` component.

// The first comment explains that we are defining the `UserProfile` component.

// The next few comments explain that we are defining state variables for the user data and the router, and using the `useEffect` hook to retrieve the user data when the component mounts or the user ID changes.

// The next comment explains that we are displaying a loading message if the user data is not yet available.

// The final comment explains that we are rendering the user profile using the retrieved user data.

// I hope this helps! Let me know if you have any further questions.